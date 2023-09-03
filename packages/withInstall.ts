import type { App, Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin

// withInstall 函数接受一个泛型类型 T 和一个名为 extra 的可选对象，其中 extra 是一个键值对，表示需要额外添加的组件
export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  // 将 install 函数添加到 main 对象上，install 函数接受一个 App 类型的参数 app，并会将 main 和 extra 对象中的组件注册到 app 上
  (main as SFCWithInstall<T>).install = (app: App) => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  // 如果 extra 对象不为空，遍历 extra 对象，将其中的组件添加到 main 对象上，以方便单独引用
  if (extra) {
    for (const [compName, comp] of Object.entries(extra)) {
      (main as Record<string, any>)[compName] = comp
    }
  }

  // 返回一个交叉类型，将 T 断言为具体的类型 T & plugin & Record<string, any>
  return main as SFCWithInstall<T> & E
}
