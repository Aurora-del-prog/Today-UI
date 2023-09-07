import type { Ref, SetupContext } from 'vue'
import type { IInnerTreeNode } from '../types/tree-type'
import type { IUseCore, IUseLazyLoad, IUseToggle } from '../types/use-tree-type'
import { useLazyLoad } from './use-lazy-load'

export function useToggle(
  innerData: Ref<IInnerTreeNode[]>,
  core: IUseCore,
  emit: (event: "lazy-load", ...args: any[]) => void,
  lazyLoad?: IUseLazyLoad
): IUseToggle {
  const { lazyLoadNodes } = useLazyLoad(innerData, core, emit)
  const toggleNode = (node: IInnerTreeNode) => {
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur) {
      cur.expanded = !cur.expanded
      if (cur.expanded) {
        // 节点懒加载
        lazyLoadNodes(cur)
      }
    }
  }
  return {
    toggleNode
  }
}
