<template>
  <div class="register">
      <login-top middleTop="注册bilibili"> </login-top>
      <login-text label="姓名" 
      style='margin:4.167vw 0;'
      rule='^.{6,16}$'
      placeholder="请输入姓名"
      /> 
      <login-text label="账号" 
      placeholder="请输入账号"
      rule='^.{6,16}$'
      /> 
      <login-text label="密码"
      placeholder="请输入密码"
      type='password'
      rule='^.{6,16}$'
      /> 
  </div>

</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
export default {
  components:{
    LoginTop,
    LoginText,
  }
 
}
</script>