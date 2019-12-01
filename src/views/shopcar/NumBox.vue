<template>
  <div class="mui-numbox">
    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="subtract" ref="subtract">-</button>
    <input id="test" class="mui-input-numbox" type="number"  
    :value="initcount" readonly ref="numbox"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add" ref="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'NumBox',
  data() {
    return {
      initcount:this.$store.getters.getItemCount[this.id]
    };
  },
  props:{
    id:0
  },
 
  methods:{
    subtract(){
      this.initcount = parseInt(this.initcount) - 1
    },
    add(){
      this.initcount = parseInt(this.initcount) + 1
    },
    
   
  },
  watch:{
    initcount(){
      this.$store.commit('updateGoodsInfo',{id:this.id,count:this.initcount})
       if(this.initcount <= 1){     
        this.$refs.subtract.setAttribute("disabled", true)
      }else{
        this.$refs.subtract.removeAttribute("disabled");
      }
      
    }
    
  }
   
  
};
</script>
<style  scoped>
</style>