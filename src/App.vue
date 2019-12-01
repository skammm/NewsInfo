<template>
  <div id="app">
    <mt-header title="新闻资讯">
      <mt-button icon="back" slot="left" 
      @click.native="back" v-show="isShow">返回</mt-button>
    </mt-header>
    <transition>
      <router-view></router-view>
    </transition>
    <tab-bar/>
  </div>
</template>
<script>
import TabBar from 'components/content/TabBar'
export default {
  name:'app',
  data(){
    return{
      isShow:true
    }
  },
  components:{
    TabBar
  },
  methods:{
    back(){
      this.$router.back();
    }
  },
  watch:{
    '$route.path':function(){
      if(this.$route.path === '/home'){
        this.isShow = false
      }else{
        this.isShow = true
      }
    }
  }
}
</script>

<style lang="scss"  scoped> 
  @import "assets/css/base.css";
  #app{
    overflow-x: hidden;
    padding-bottom: 50px;
  }
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 1s ease;
    
  }
</style>
