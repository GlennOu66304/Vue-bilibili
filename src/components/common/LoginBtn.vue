<template>
<div class='btnparent' @click='registerClick'>
<div class="loginbtn"> {{btntext}}</div>
</div>

    
</template>

<script>
export default {
    props:['btntext'],
    methods:{
        registerClick(){
            this.$emit('registersubmit')
        }
    }
}
</script>

<style >
.btnparent{
    padding: 4.167vw 2.778vw;
}
.loginbtn{
    height: 45px;
    background-color: #FF9db5;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:4.44vw;
    border-radius:6.25vw;

}

</style>