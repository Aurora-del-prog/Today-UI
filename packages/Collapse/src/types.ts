import type { Ref, InjectionKey } from 'vue'
export type NameType = string | number

export interface CollapseProps {
  modelValue: NameType[];
  accordion?: boolean;
}
export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>;
  handleItemClick: (name: NameType) => void;
}

export interface CollapseEmits {
  (e:'update:modelValue', values: NameType[]) : void;
  (e:'change', values: NameType[]) : void;
}

// 当从不同的文件导入 collapseContextKey 时，实际上引用的是不同的符号对象，它们在内存中是不同的。这就是为什么通过导入 collapseContextKey 时得到不同的值的原因。
// 如果希望在不同的文件中获得相同的值，可以将 collapseContextKey 定义为一个可共享的常量，而不是使用符号。例如，可以将其定义为字符串常量，
// export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
export const collapseContextKey = 'collapseContextKey'
