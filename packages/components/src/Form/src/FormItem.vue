<template>
  <div class="s-form__item">
    <span 
      class="s-form__label s-form__item--vertical">  
       {{ props.label }}
    </span>
    <div :class="{'s-form__item--errorInput': showMessage}">
      <slot @input="handleInput"></slot>
    </div>
    <div v-if="showMessage" class="s-form__item--error">
      {{ errorMessage }}
    </div>

  </div>
</template>

<script setup lang='ts'>
import { inject, onMounted, onUnmounted, provide, ref } from 'vue';
import type { formItemProps } from './type/form-item-type';
import { formContextToken } from './type/form-type';
import Validator from 'async-validator'


defineOptions({
  name: 'SFormItem'
})
const props = defineProps<formItemProps>()

 // 实现一个validate方法并提供给下级
// 做校验需要数据和校验规则，它们由form提供的
const formCtx = inject(formContextToken)
const showMessage = ref(false)
const errorMessage = ref('')
const handleInput = () =>{
  console.log('输入流')
}
const validate = () => {
      //裸奔使用，没有使用formitem嵌套
      if (!formCtx) {
        console.warn('请在Form中使用FormItem')
        return Promise.reject('请在Form中使用FormItem')
      }
      if (!props.field) {
        console.warn('如果要校验当前项，请设置field字段')
        return Promise.reject('如果要校验当前项，请设置field字段')
      }
      // 不需要校验
      if (!formCtx.rules) {
        return Promise.resolve({ result: true })
      }
      //根据field字段，获取对应的校验规则
      const itemRules = formCtx.rules[props.field] || undefined
      if (!itemRules) {
        return Promise.resolve({ result: true })
      }
      // 获取校验规则和数值
      const value = formCtx.model[props.field]

      // 执行校验并返回结果
      // 创建一个校验实例
      const validator = new Validator({ [props.field]: itemRules })
      return validator.validate({ [props.field]: value }, errors => {
        if (errors) {
          // 校验失败，显示错误信息
          showMessage.value = true
          errorMessage.value = errors[0].message || '校验错误'
        } else {
          // 校验通过，清空错误信息
          showMessage.value = false
          errorMessage.value = ''
        }
      })
    }
    const formItemCtx = {
      validate
    }
    provide('FORM_ITEM_CTX', formItemCtx)

    // 挂载后注册到FormCtx中
    onMounted(() => {
      if (props.field) {
        formCtx?.addItem(formItemCtx)
      }
    })
    onUnmounted(() => {
      if (props.field) {
        formCtx?.removeItem(formItemCtx)
      }
    })
</script>

<style scoped>

</style>