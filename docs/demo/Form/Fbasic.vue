<template>
  <s-form 
    :model="model" 
    :rules="rules" 
    layout="vertical"
    @submit="onLogin"
    ref="loginForm"
  >
    <s-form-item label="用户名：" field="user">
      <s-input v-model="model.user"  />
    </s-form-item>
    <s-form-item label="密码：" field="pwd">
      <s-input 
        type="password" v-model="model.pwd"  />
    </s-form-item>
    <s-form-item>
      <button @click.stop="reset">重置</button>
    </s-form-item>
  </s-form>
</template>
<script setup>
  import {ref} from 'vue'
  const model = ref({
    user: '',
    pwd: ''
  })
  const rules = ref({
    user: [{required: true, message: '用户名为必填项'}],
    pwd: [{required: true, message: '密码为必填项'}],
  })

  const loginForm = ref(null)
  const onLogin = () => {
    loginForm.value.validate(valid => {
      if (valid) {
        alert('登录成功')
      } else {
        alert('校验失败，请重试！')
      }
    })
  }
  const reset = () => {
    console.log(12222)
    loginForm.value.resetField()
  }
</script>
