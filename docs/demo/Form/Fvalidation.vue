<template>
<div>
  <SForm :model="model" :rules="rules" ref="formRef">
    <s-formItem prop="email" label="the email">
      <s-input v-model="model.email" />
    </s-formItem>
    <s-formItem prop="password" label="the password">
      <s-input v-model="model.password" type="password" />
    </s-formItem>
    <s-formItem prop="agreement" label="agreement">
      <s-switch v-model="model.agreement" />
    </s-formItem>
    <s-formItem prop="zone" label="zone">
      <s-select v-model="model.zone" :options="options" />
    </s-formItem>
    <s-formItem>
      <s-button @click.prevent="submit" type="primary">Submit</s-button>
      <s-button @click.prevent="reset">Reset</s-button>
    </s-formItem>
  </SForm>

  <p>
    form value:
    <pre>{{model}}</pre>
  </p>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const model = reactive({
  email: '',
  password: '',
  agreement: false,
  zone: ''
})
const rules = {
  // name: [{ type: 'string', required: true, trigger: 'blur' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },],
  email: [{ type: 'email', required: true, trigger: 'blur' }],
  password: [{ type: 'string', required: true, trigger: 'blur' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' } ],
  agreement: [{ type: 'enum', required: true, enum: [true], message: '请同意协议'} ],
  zone: [{ type: 'object', required: true, trigger: 'change' }],
}
const options = [
  { label: 'zone 1', value: 'one' },
  { label: 'zone 2', value: 'two' },
  { label: 'zone 3', value: 'three' }
]
const formRef = ref()
const submit = async () => {
  try {
    await formRef.value.validate()
    console.log('passed!')
  } catch(e) {
    console.log('the promise', e)
  }
}
const reset = () => {
  formRef.value.resetFields()
}
</script>
<style>

</style>