<template>
  <div >
      <login-top middleTop="登陆bilibili"> 
           <div slot="right" style="font-size:3.611vw" @click="$router.push('/register')">切换到注册</div>
      </login-top>
      
      <login-text label="账号" 
      placeholder="请输入账号"
      rule='^.{6,16}$'
      @inputchange='res => model.username = res'
      /> 

      <login-text label="密码"
      placeholder="请输入密码"
      type='password'
      rule='^.{6,16}$'
      @inputchange='res => model.password = res'
      /> 
        <login-btn btntext="登陆" @registersubmit="registersubmit"></login-btn>
  </div>



</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'
export default {
  data(){
  return {
  model:{
   username:'',
   password:''
  }
  }
  },
  components:{
    LoginTop,
    LoginText,
    LoginBtn
  },
  methods:{
     async registersubmit(){
       let rulg =/^.{6,16}$/
       if(rulg.test(this.model.username) && rulg.test(this.model.password)){
        const res= await this.$http.post('/Login',this.model)
         this.$msg.fail(res.data.msg)   
         /*..................*/      
       }else{
         this.$msg.fail('格式不正确，重新输入')
       }
  }

  }
}
</script>