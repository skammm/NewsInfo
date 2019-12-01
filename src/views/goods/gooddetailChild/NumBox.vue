<template>
  <div class="mui-numbox">
    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="subtract" ref="subtract">-</button>
    <input id="test" class="mui-input-numbox" type="number" v-model="number" value="1"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add" ref="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'NumBox',
  data() {
    return {
      number:1
    };
  },
  props:{
    max:0
  },
  methods:{
    subtract(){
      this.number = parseInt(this.number) - 1
    },
    add(){
      this.number = parseInt(this.number) + 1
    },
  },
  watch:{
    number(){
      this.$emit('getNumber',this.number)
      if(this.number <= 1){     
        this.$refs.subtract.setAttribute("disabled", true)
      }else{
        this.$refs.subtract.removeAttribute("disabled");
      }
      if(this.number >= this.max){
        this.$refs.add.setAttribute("disabled", true)
      }else{
        this.$refs.add.removeAttribute("disabled");
      }
    }
  }
};
</script>
<style  scoped>
</style>