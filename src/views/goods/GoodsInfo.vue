<template>
  <div class="goods-info"> 
    <goods-list :list="list" ></goods-list>
     <mt-button type="danger" size="large" @click.native="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList'
import {getGoodsInfo} from 'network/goods'
import { Toast } from 'mint-ui';
export default {
  name: 'GoodsInfo',
  data() {
    return {
      list:[],
      pageIdx:0
    };
  },
  components:{
    GoodsList
  },
  created(){
    this.getGoods();
  },
  methods:{
    getGoods(){
      getGoodsInfo(this.pageIdx).then(res=>{
        
        if(res.data.status!==-1){
          this.list = this.list.concat(res.data.gods) ;
        }else{
          Toast('没有更多囖~')
        }
    })
    },
    getMore(){
      this.pageIdx += 1;
      this.getGoods();
    },
  
  }
};
</script>
<style  scoped lang="scss">
  .goods-info{
    width: 100%
  }
</style>