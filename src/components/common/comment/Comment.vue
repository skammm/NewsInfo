<template>
  <div class="comment">
    <h1>发表评论</h1>
    <hr/>
    <textarea cols="10" rows="3" placeholder="请输入内容，最多120字"
     maxlength="120" v-model="text"></textarea>
    <mt-button type="primary" size="large" @click="postComment">评论</mt-button>
    <div class="container" v-for="(item,index) in comments" :key="index">
      <div class="container-header">
        <span>第{{index+1}}楼</span>
        <span>用户：{{item.username}}</span>
        <span>发表时间：{{item.comDate | dateFormat}}</span>
      </div>
      <div class="container-info">
        {{item.content===''?'此用户很懒，什么也没写':item.content}}
      </div>
    </div>
    <mt-button type="danger" size="large" @click.native="getMore">加载更多</mt-button>
  </div>
</template>

<script>

import { Toast } from 'mint-ui';
export default {
  name: 'Comment',
  data() {
    return {
       text:''
    
    };
  },
  props:{
    comments:{
      type:Array,
      default(){
        return []
      }
    }
  },
  
  methods:{
     
     getMore(){
       this.$emit('getmore')
     },
     postComment(){
       if(this.text.trim().length === 0){
         return Toast('评论内容不能为空');
       }


       //缺少将数据传到服务器的代码


       
       var cmt = {
         username:'匿名',
         content:this.text.trim(),
         comDate:Date.now(),
       }
       this.comments.unshift(cmt);
       this.text = '';
     }
  },
  
  
};
</script>
<style  scoped lang="scss">
  .comment{
    h1{
      font-size: 23px;
      margin-bottom: 10px;
    }
    .container{
      margin:6px 0;
      .container-header{
        font-size: .7em;
        background: rgb(211, 191, 191);
        span{
          padding:0 6px;
        }
      }
      .container-info{
        text-indent: 2em;
        font-size:15px;
        padding:5px 0;
      }
    }
  }
</style>