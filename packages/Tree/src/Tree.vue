<template>
  <div 
    class="s-tree">
    <template 
      v-for="(item,index) in    
        treeData.expendedTree.value"  :key="index">
      <div 
        class="s-tree__node"
        :style="{
          'padding-left' : 
          `${NODE_INDENT * (item.level -   1)}px`
        }"
        @mouseenter="toggleOperate"
        @mouseleave="toggleOperate"
      >
       <!-- icon图标，是否叶子结点，是否有从插槽,如果是叶子节点则放一个空白占位元素，否则放一个三角形反馈图标 -->
       <span v-if="!item.isLeaf" 
        class="s-tree__node--iconspan" >
          <s-icon 
            v-if="!$slots.icon"
            icon="caret-right" 
            class="s-tree__node--icon"
            :style="{
              'transform': 
                item.expanded ? 'rotate(90deg)' : ''
            }"
            @click="treeData.toggleNode(item)">
          </s-icon>
          <!-- 传递treenode和toggleNode方法给外面 -->
          <slot 
            name="icon" 
            :nodeData="item" 
            :toggleNode="treeData.toggleNode" >
          </slot>
       </span>
       <span v-else :style="{
        'display': 'inline-block',
        'margin-left' : '16px'
       }">
       </span>
       <!-- 复选框 -->
       <span v-if="checkable" :class="{
        's-tree__inChecked': item.inChecked}">
        <!-- 半选 -->
          <span 
            v-if="item.inChecked"
            class="s-tree-checkbox__inner"
            @click="treeData.toggleCheckNode(item)">
            -
          </span>
          <input 
            type="checkbox" 
            v-model="item.checked"
            :style="{'margin-left': '6px'}"
            @click="treeData.toggleCheckNode(item)"
          />
       </span>
       <!-- 节点懒加载 -->
       <span>
          <s-icon 
            v-if="item.loading && !$slots.loading"     
            icon="spinner" 
            class="s-tree__node--loading" 
            spin>
          </s-icon>
          <slot name="loading" 
            :treeData="treeData">
          </slot>
        </span>
       <!-- 节点文本 -->
       <slot name="content" :nodeData="item" ></slot>
       <span v-if="!$slots.content">{{item.label}}</span>
       <!-- 节点增删 -->
       <span 
        v-if="operable && isShow"
        class="s-tree__node--operate">
          <s-icon 
            icon="plus" 
            class="s-tree__node--plus"
            @click="handPlus(item)"></s-icon>
          <s-icon 
            icon="minus" 
            class="s-tree__node--minus"
            @click="handleMinus(item)"></s-icon>
      </span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {ref, toRefs } from 'vue';
import SIcon from '../../Icon';
import type { IInnerTreeNode, TreeProps } from './types/tree-type'
import useTree from './hooks/use-tree'
defineOptions({
  name: 'STree'
})
const props = withDefaults(defineProps<TreeProps>(),{
  data : () => []
})
// 节点缩进大小
const NODE_INDENT = 30
// 创建一个开关变量
const isShow = ref(false)
const toggleOperate = () => {
  if (isShow.value) {
    isShow.value = false
  } else {
    isShow.value = true
  }
}
const checkable = ref(props.checkable)
const operable = ref(props.operable)


const emit = defineEmits(['lazy-load'])
const {data} = toRefs<TreeProps>(props)
const  treeData = useTree(data?.value!,props,emit)
const handPlus = (treeNode) =>{
  const randomId = 
    Math.random().toString(36).substring(2, 8)
  treeData.append(treeNode, {
    id: randomId,
    label: '新节点 ' + randomId
  } as IInnerTreeNode)
}
const handleMinus = (treeNode) =>{
  treeData.remove(treeNode)
}
</script>

<style scoped>

</style>