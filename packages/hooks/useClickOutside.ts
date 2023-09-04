import { onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
/**
 * 监听点击事件并判断点击是否发生在指定元素外部
 * @param elementRef 目标元素的引用
 * @param callback 点击外部时触发的回调函数
 */
const useClickOutside = (elementRef: Ref<undefined | HTMLElement>, callback: (e: MouseEvent) => void) => {
  /**
   * 点击事件处理函数
   * @param e 鼠标事件对象
   */
  const handler = (e: MouseEvent) => {
    if (elementRef.value && e.target) {
      // 判断点击事件是否发生在目标元素的外部
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        // 执行回调函数
        callback(e)
      }
    }
  }

  // 在组件挂载后绑定点击事件监听
  onMounted(() => {
    document.addEventListener('click', handler)
  })

  // 在组件卸载前移除点击事件监听
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
}


export default useClickOutside