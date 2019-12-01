<template>
  <swiper :swiper-list="swiperList"/>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
export default {
  name: 'HomeSwiper',
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
  },
  components:{
    Swiper
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