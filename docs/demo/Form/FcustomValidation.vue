<template>
<div>
  <SForm :model="model" :rules="rules" ref="formRef">
    <!-- <s-formItem prop="name" label="enter your name" #default="{ validate }">
      <s-input v-model="model.name" @blur="validate('blur')" @s-input="validate('s-input')"/>
    </s-formItem> -->
    <s-formItem prop="email" label="the email">
      <s-input v-model="model.email" />
    </s-formItem>
    <s-formItem prop="password" label="the password">
      <s-input v-model="model.password" type="password" />
    </s-formItem>
    <s-formItem prop="confirmPwd" label="confirm password">
      <s-input v-model="model.confirmPwd" type="password" />
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
  confirmPwd: ''
})
const rules = {
  email: [{ type: 'email', required: true, trigger: 'blur' }],
  password: [{ type: 'string', required: true, trigger: 'blur' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' } ],
  confirmPwd: [{ type: 'string', required: true, trigger: 'blur' }, {  validator: (rule, value) => value === model.password, trigger: 'blur', message: '两个密码必须一致' } ],
}
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