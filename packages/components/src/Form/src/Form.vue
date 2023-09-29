<template>
  <form class="vk-form">
   <slot />
  </form>
</template>

<script setup lang="ts">
import { provide } from 'vue';
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
  validate
})
</script>

<style lang="scss" scoped>

</style>