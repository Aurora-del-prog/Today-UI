<template>
<div>
  <SForm :model="model" ref="formRef">
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
  confirmPwd: '',
  agreement: false,
  zone: ''
})

const options = [
  { label: 'zone 1', value: 'one' },
  { label: 'zone 2', value: 'two' },
  { label: 'zone 3', value: 'three' }
]
const formRef = ref()
const submit = async () => {
  alert('submitted!')
}
const reset = () => {
  formRef.value.resetFields()
}
</script>

<style>

</style>