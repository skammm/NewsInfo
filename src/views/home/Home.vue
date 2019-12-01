<template>
  <div id="home">
   <home-swiper :swiper-list="swiperlist"></home-swiper>
   <grid-view></grid-view>
  </div>
</template>

<script>
import {getHomedata} from 'network/home'

import HomeSwiper from './childComps/HomeSwiper'
import GridView from './childComps/GridView'
export default {
  name: 'Home',
  data(){
    return{
     swiperlist:[]
    }
  },
  created(){
    getHomedata().then(res=>{
      this.swiperlist = res.data.imgs;
    })
  },
  methods:{
    
  },
  components:{
    HomeSwiper,
    GridView
  }
};
</script>
<style  scoped>
 
  
</style>