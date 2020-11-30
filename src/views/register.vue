<template>
  <div class="register">
      <login-top middleTop="注册bilibili"> </login-top>
      <login-text label="姓名" 
      placeholder="请输入姓名"
      style='margin:4.167vw 0;'
      rule='^.{6,16}$'
      @inputchange='res => name = res'
      /> 

      <login-text label="账号" 
      placeholder="请输入账号"
      rule='^.{6,16}$'
      @inputchange='res => username = res'
      /> 

      <login-text label="密码"
      placeholder="请输入密码"
      type='password'
      rule='^.{6,16}$'
      @inputchange='res => password = res'
      /> 
        <login-btn btntext="注册" @registersubmit="registersubmit"></login-btn>
  </div>



</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'
export default {
  data(){
  return {
   name:'',
   username:'',
   password:''
  }
  },
  components:{
    LoginTop,
    LoginText,
    LoginBtn
  },
  methods:{
     registersubmit(){
       if(this.name && this.username && this.password){
         this.$http.post('/register',{
           name:this.name,
           username:this.username,
           password:this.password
         }).then(res =>{
           
         })
       }
  },

  }
}
</script>