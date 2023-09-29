<template>
  <form class="vk-form">
   <slot />
  </form>
</template>

<script setup lang="ts">
import { provide, defineProps } from 'vue';
import type { FormProps, FormItemContext, FormContext,FormValidateFailure,FormInstance } from './type/type';
import type { ValidateFieldsError } from "async-validator"
import { formContextKey } from './type/type';
defineOptions({
  name: 'SForm'
})
const props = defineProps<FormProps>()

const fields: FormItemContext[] = []
const addField: FormContext['addField'] = (field) => {
  fields.push(field)
}
const removeField: FormContext['removeField'] = (field) =>{
  if(field.prop){
    fields.splice(fields.indexOf(field),1)
  }
} 

// 重置校验和值，默认全部，key指定那些值
const resetFields = (keys: string[] = []) => {
  const filterArr = keys.length > 0 ? fields.filter(
    field => keys.includes(field.prop as any)
  ): fields
  filterArr.forEach(field => field.resetField())
}
const clearValidate = (keys: string[] = []) => {
  const filterArr = keys.length > 0 ? fields.filter(
    field => keys.includes(field.prop as any)
  ): fields
  filterArr.forEach(field => field.clearValidate())
}
// form全局校验
const validate = async () => {
  let validationErrors: ValidateFieldsError = {}
  for (const field of fields) {
    try {
      await field.validate('')
    } catch (e) {
      const error = e as FormValidateFailure
      validationErrors = {
        ...validationErrors,
        ...error.fields
      }
    }
  }
  if(Object.keys(validationErrors).length === 0){
    return true
  }
  return Promise.reject(validationErrors)
}

provide(formContextKey,{
  ...props,
  addField,
  removeField
})
defineExpose<FormInstance>({
  validate,
  resetFields,
  clearValidate
})
</script>

<style lang="scss" scoped>

</style>