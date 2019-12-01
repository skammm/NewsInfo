<template>
  <div class="pic">
    <tab-control :title="title" @tabClick="tabClick"></tab-control>
    <ul>
      <router-link v-for="item in phos" 
      :key="item.id" tag="li" :to="'/home/photoinfo/'+item.phoId">
        <img v-for="(pic,index) in item.phos" :key="index" 
        v-lazy="pic" alt="">
      </router-link>
    </ul>
  </div>
</template>

<script>
import TabControl from 'components/content/tabControl/TabControl'
import {getNewstypes,getNewspic} from 'network/home'
export default {
  name: 'NewsPic',
  data() {
    return {
      title:[],
      type:'清纯',
      pageIdx:1,
      phos:[]
    };
  },
  components:{
    TabControl
  },
  created(){
    getNewstypes().then(res=>{
      res.data.types.unshift('全部');
      this.title = res.data.types;
    })
    this.getPic();
  },
  methods:{
    tabClick(index){
      this.type = this.title[index];
      this.getPic();
    },
    getPic(){
      getNewspic(this.pageIdx,this.type).then(res=>{
        this.phos = res.data.phos;
   
      })
    }
  }
};
</script>
<style  scoped lang="scss">

.pic{
  ul{
    li{
      padding:10px 20px;
      list-style: none;
      img{
        width: 100%;
      }
    }
  }
}
</style>