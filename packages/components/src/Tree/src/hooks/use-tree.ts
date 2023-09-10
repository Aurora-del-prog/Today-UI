// composables/use-tree.ts
import { ref, unref } from 'vue'
import type { Ref} from 'vue'

import type { ITreeNode, TreeProps } from '../types/tree-type'
import type { TreeUtils } from '../types/use-tree-type'
import { generateInnerTree } from '../utils'
import { useCheck } from './use-check'
import { useCore } from './use-core'
import { useToggle } from './use-toggle'
import { useOperate } from './use-operate'
import { useLazyLoad } from './use-lazy-load'

export default function useTree(
  tree: ITreeNode[] | Ref<ITreeNode[]>,
  treeProps: TreeProps,
  emit: (event: "lazy-load", ...args: any[]) => void
): TreeUtils {
  const data = unref(tree)
  const innerData = ref(generateInnerTree(data))

  const core = useCore(innerData)
  const plugins = [useToggle, useCheck, useOperate]
  const lazyLoad = useLazyLoad(innerData, core, emit)

  // 聚合插件
  const pluginMetheds = plugins.reduce((acc, plugin) => {
    return { ...acc, ...plugin(innerData, core, emit, lazyLoad) }
  }, {})

  return {
    ...core,
    ...pluginMetheds,
    treeData: innerData
  } as TreeUtils
}
