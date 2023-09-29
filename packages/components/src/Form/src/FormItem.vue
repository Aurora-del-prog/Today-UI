<template>
  <div 
    class="vk-form-item"
    :class="{
      'is-error': validateStatus.state === 'error',
      'is-success': validateStatus.state === 'success',
      'is-loading': validateStatus.loading,
      'is-required': isRequired
    }"
  >
    <label class="vk-form-item__label">
     <slot name="label" :label="label">
      {{ label }}
     </slot>
    </label>
    <div class="vk-form-item__content">
      <!-- 如果采用原生表单，可以通过作用域插槽直接传递值，然后使用的时候直接从父组件提取validate -->
      <slot :validate="validate"/>
      <div 
        class="vk-form-item__error-msg"
        v-if="validateStatus.state === 'error'"
      > 
        {{ validateStatus.errorMsg }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, reactive, provide, onMounted, onUnmounted, defineProps } from 'vue';
import Schema from 'async-validator'
import { formContextKey,formItemContextKey } from './type/type';
import { isNil } from 'lodash-es';
import type {FormItemProps, FormValidateFailure,FormItemContext,validateStatusProp,FormItemInstance } from './type/type'

defineOptions({
  name: 'SFormItem'
})
const formContext = inject(formContextKey)
const props = defineProps<FormItemProps>()

// 获取对应值，0或者空字符串都是正常的
const innerValue = computed(() => {
  const model = formContext?.model
  if(model && props.prop && !isNil(model[props.prop])){
    return model[props.prop]
  }else{
    return null
  }
})
// 获取对应校验规则
const itemRules = computed(() => {
  const rules = formContext?.rules
  if(rules && props.prop && rules[props.prop]){
    return rules[props.prop]
  }else{
    return []
  }
})
// 获取对应的触发方式
const getTriggeredRules = (trigger?: string) => {
  const rules = itemRules.value
  if(rules){
    return rules.filter(rule => {
      if(!rule.trigger || !trigger) return true
      return rule.trigger && rule.trigger === trigger
    })
  }
}

// 获取所有响应状态 reactive,控制样式，内容等等
const validateStatus: validateStatusProp = reactive({
  state: 'init',
  errorMsg: '',
  loading: false
})

// 初始状态
let initialVal = null
// 必填的话 ，前面有个红点
const isRequired = computed(() => {
  return itemRules.value.some(rule => rule.required)
})
// 校验方法
const validate= async (trigger?: string) => {
  // 字段
  const modelName = props.prop
  const triggeredRules = getTriggeredRules(trigger)
  if(!triggeredRules?.length) return true
  if(modelName) {
    const validator = new Schema({
      [modelName] : triggeredRules
    })
    validateStatus.loading = true
    // innerValue.value：值
    return validator.validate({ [modelName]: innerValue.value })
      .then(() =>{
        validateStatus.state = 'success'
        console.log('first')
      })
      .catch((e: FormValidateFailure) => {
        const { errors } = e
        validateStatus.state = 'error'
        validateStatus.errorMsg = (errors && errors.length) ? errors[0].message || '' : ''
        console.log( validateStatus.state)
        return Promise.reject(e)
      })
      .finally(() => {
        validateStatus.loading = false
      })
  }
}

// 清除验证，恢复初始状态
const clearValidate = () => {
  validateStatus.state ='init',
  validateStatus.errorMsg ='',
  validateStatus.loading =false
}
// 恢复初始状态
const resetField = () => {
  clearValidate()
  const model = formContext?.model
  if(model && props.prop && !isNil(model[props.prop])){
    model[props.prop] = initialVal
    console.log(model[props.prop])
  }

}

// 特定时机自动触发，blur  focus等等 传递给子组件使用
// 如果子组件不是我们封装的，用的原生的怎么办？- 在slot操作
const context: FormItemContext = {
  validate,
  prop: props.prop || '',
  clearValidate,
  resetField
}
provide(formItemContextKey,context)

onMounted(() => {
  if(props.prop){
    formContext?.addField(context)
  }
})
onUnmounted(() =>{
  if(props.prop){
    formContext?.removeField(context)
    initialVal = innerValue.value
  }
})

defineExpose<FormItemInstance>({
  validateStatus,
  validate,
  resetField,
  clearValidate
})
</script>

<style lang="scss" scoped>

</style>