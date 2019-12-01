<template>
  <div class="photo-info">
    <div class="header">
      <h1>{{result.intro}}</h1>
      <p>
        <span>发表时间:2012-12-12 12:12:12</span>
        <span>点击:0次</span>
      </p>
    </div>
    <div>
      <!--这里放图 -->
       <div class="thumbs">
         <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
       </div>
      <p>我们的青春，啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
      </p>
    </div>
    <comment :comments="comments"/>
  </div>
</template>

<script>
import {getPhotoinfo,getPhotocomment} from 'network/photo';
import Comment from 'components/common/comment/Comment'
export default {
  name: 'PhotoInfo',
  data() {
    return {
      result:{},
      id:this.$route.params.id,
      comments:[],
      slide1:[]
    };
  },
  created(){
    this.getPhoto();
    getPhotocomment(this.id).then(res=>{
      this.comments = res.data.comments;
    })
  },
  components:{
    Comment
  },
  methods:{
    getPhoto(){
      getPhotoinfo(this.id).then(res=>{
      this.result = res.data.pho;
      var phos = res.data.pho.phos;
      for(var i=0;i<phos.length;i++){
        var item = {};
        item.src = phos[i];
        item.msrc = phos[i];
        item.w = 300;
        item.h = 400;
        this.slide1.push(item);
      }
    })
    },
     handleClose () {
        console.log('close event')
      }
  }
  
};
</script>
<style  scoped lang="scss">
 

  .photo-info{
     .header{
    h1{
      text-align: center;
      font-size: 18px;
      color: blue;
      padding:6px 0;
    }
    p{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgb(197, 185, 185)
    }
  }
  .thumbs {
  /deep/ .my-gallery {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 80px;
      flex: 1;
      margin: 5px;
      img {
        width: 100%;
        height: 120px;
      }
    }
  }
}
  }
</style>