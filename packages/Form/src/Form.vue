<template>
  <form class="s-form" @submit="submit" ref="formRef" >
    <slot ></slot>
  </form>
</template>

<script setup lang="ts">
import type { Values } from 'async-validator'
import {  provide, ref } from 'vue'
import type { FormItemContext } from './type/form-item-type'
import { formContextToken} from './type/form-type'
import type { formProps } from './type/form-type'
defineOptions({
  name:'SForm'
})
const emit = defineEmits(['submit','update:modelValue'])
const props = defineProps<formProps>()
const formRef = ref<HTMLFormElement>()

    // 提供一个Set存放待校验items
    //避免重复的校验或处理逻辑
    //Set 提供了高效的查找和删除操作。由于 Set 的内部实现使用哈希表，可以在大多数情况下以常数时间复杂度执行插入、查找和删除操作
    const formItems = new Set<FormItemContext>()
    const addItem = (item: FormItemContext) => {
      formItems.add(item)
    }
    const removeItem = (item: FormItemContext) =>{
      formItems.delete(item)
    }
    // 提供表单上下文给后代使用
    provide(formContextToken, {
      model: props.model,
      rules: props.rules,
      addItem,
      removeItem
    })

    const submit = (event: Event) => {
      //防止表单的默认行为-刷新页面
      event.preventDefault()
      emit('submit')
    }

    // 表单全局校验方法
    // eslint-disable-next-line no-unused-vars
    function validate(callback: (valid: boolean) => {}) {
      const tasks: Array<Promise<Values>> = []

      // 遍历表单项，执行验证任务
      formItems.forEach(item => {
        tasks.push(item.validate()) // 调用表单项的 validate 方法，并将返回的 Promise 对象添加到 tasks 数组中
      })

      // 等待所有验证任务完成
      Promise.all(tasks)
        .then(() => {
          // 所有验证任务成功完成时，调用回调函数，并传递 true 作为参数，表示验证成功
          callback(true)
        })
        .catch(() => {
          // 当有任何一个验证任务失败时，调用回调函数，并传递 false 作为参数，表示验证失败
          callback(false)
        })
    }

    const resetField = () => {
      formRef.value?.reset()
    }

    // 对外暴露接口,用户可以通过validate定义验证格式
    defineExpose({
      validate,
      resetField
    })

</script>

<style lang="scss" scoped>

</style>