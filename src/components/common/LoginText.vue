<template>
<div>   
      <van-field
      :label="label"
      :type="type"
      :placeholder="placeholder"
       v-model="content"
      />
    </div>

    
</template>

<script>
export default {
    data(){
        return{ 
            content:''
        }
    },
    props:['label','type','placeholder','rule'],
    methods:{
       handlerulg(){
       const rue = new RegExp(this.rule)
       console.log(rue);
    }
    },
    watch:{
        content(){ 
            this.handlerulg()
        

        }
    }

    
}
</script>

