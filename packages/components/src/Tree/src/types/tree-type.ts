// 拖拽
export type IDragdrop = boolean | IDropType
export interface IDropType {
  dropPrev?: boolean
  dropNext?: boolean
  dropInner?: boolean
}

export interface ITreeNode {
  label: string
  id?: string
  children?: ITreeNode[]

  selected?: boolean // 点击选中
  checked?: boolean // 勾选
  expanded?: boolean // 展开
  inChecked?: boolean // 待选中

  disableSelect?: boolean
  disableCheck?: boolean
  disableToggle?: boolean
}

export interface IInnerTreeNode extends ITreeNode {
  parentId?: string // 父节点ID
  level: number // 节点层级
  isLeaf?: boolean // 是否叶子结点
  loading?: boolean // 节点是否显示加载中
  childNodeCount?: number // 该节点子节点的数量
}

export interface TreeProps {
  data: Array<ITreeNode>,
  // 是否显示参考线
  lineable?: boolean,
  // 是否显示复选框
  checkable?: boolean,
  // 是否显示操作按钮
  operable?: boolean,
  // 拖拽开关属性
  dragdrop?: IDragdrop,
  // 虚拟列表开关
  height?: number,
  itemHeight?: number
} 

