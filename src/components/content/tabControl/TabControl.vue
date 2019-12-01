<template>
    <div class="content" ref="content"  @touchstart="touchStart"
     @touchmove="touchMove" @touchend="touchEnd" >
        <div class="tab-control" ref="control">
        <div v-for="(item,index) in title" :key="index" 
        class="tab-control-item" 
        :class="{active: index === currentIndex}" @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
        currentIndex:0,
        startX:0,
        currentX:0,
        distance:0,
        control:null,
        endPosition:0,
        content:null,
        currentPosition:0
    };
  },
 props:{
     title:{
         type:Array,
         default(){
             return []
         }
     }
 },
 methods:{
     itemClick(index){
         this.currentIndex = index;
         this.$emit('tabClick',index)
     },
     touchStart(e){
        
      
         // 3.保存开始滚动的位置
         this.content=  this.$refs.content
         this.control = this.$refs.control
         this.startX = e.touches[0].pageX;
        
      },
       touchMove: function (e) {
        // 1.计算出用户拖动的距离
        this.currentX = e.touches[0].pageX;
        this.distance = this.currentX - this.startX;
        this.currentPosition = this.endPosition+this.distance
        if(this.currentPosition>0){
          this.currentPosition = 0
        }else if(this.currentPosition<-this.control.offsetWidth+this.content.offsetWidth){
          this.currentPosition = -this.control.offsetWidth+this.content.offsetWidth;
        }
       

        // 2.设置当前的位置
       
        this.setTransform(this.currentPosition);
      },
      setTransform(position){
        
        this.content.style.transform = `translate3d(${position}px,0px,0px)`;
      },
      touchEnd: function (e) {
        this.endPosition = this.currentPosition;
        
      },
      

 }
};
</script>
<style  scoped>
    /* .content{
        overflow: hidden;
    } */
    .tab-control{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size:15px;
        background: #fff;
        width: 150%;
    }
   
    .tab-control-item span{
        display: block;
        width: 80px;
    }
    .active{
        color:var(--color-high-text);
        
    }
    .active span{
        border-bottom: 3px solid var(--color-tint)
    }
</style>