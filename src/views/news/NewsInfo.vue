<template>
  <div class="news-info">
    <div class="header"> 
      <h3>{{newsdata.title}}</h3>
      <p class="header-p">
        <span>发表时间:{{newsdata.add_time | dateFormat}}</span>
        <span>点击:{{newsdata.clicked}}次</span>
      </p>
      <hr/>
    </div>
    <div class="container" v-html="newsdata.content">
    </div>
    <Comment :comments="comments" @getmore="getmore"/>
  </div>
</template>

<script>
import {getNewsinfo,getNewscomment} from 'network/home'

import Comment from 'components/common/comment/Comment'
import { Toast } from 'mint-ui';
export default {
  name: 'NewsInfo',
  data() {
    return {
      id:this.$route.params.id,
      newsdata:{},
      comments:[],
      pageIdx:1,
     
    };
  },
  created(){
    getNewsinfo(this.id).then(res=>{
      
      this.newsdata = res.data.news;
    })
    this.getNewsItem();
  },
  components:{
    Comment
  },
  methods:{
    getNewsItem(){
        getNewscomment(this.id,this.pageIdx).then(res=>{
          if(res.data.status!==-1){
            this.comments = this.comments.concat(res.data.comments);
          }else{
            Toast('没有更多数据了')
          }
        
      })
     },
     getmore(){
       this.pageIdx += 1;
       this.getNewsItem();
     }
  }

};
</script>
<style  scoped lang="scss">
  .news-info{
    .header{
      padding:3px;
      h3{
        font-size: 17px;
        color: red;
        text-align: center;
      }
      .header-p{
        display: flex;
        justify-content: space-between;
        color: blue;
        margin:6px 0;
      }
    }
  }
</style>