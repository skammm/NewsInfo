<template>
  <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in swiperList" :key="index">
        <img :src="item" alt="">
      </mt-swipe-item>
      
  </mt-swipe>
</template>

<script>
export default {
  name: 'Swiper',
  data() {
    return {
    };
  },
  props:{
    swiperList:{
      type:Array,
      default(){
        return []
      }
    }
  }
};
</script>
<style  scoped>
.mint-swipe{
    height: 200px;
  }
  .mint-swipe img{
    width: 100%;
  }
</style>