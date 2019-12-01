<template>
  <div class="goods-list" @click="goodsClick">
    <div class="goodsimg">
      <img :src="item.phos[0]" alt="" class="img">
      <h3>{{item.name}}</h3>
    </div>
    <div class="info">
      <p class="price">
      <span class="new">￥{{item.newPrice}}</span>
      <span class="old">￥{{item.oldPrice}}</span>
    </p>
    <p class="sell">
      <span>热卖中</span>
      <span>剩余{{item.quantity}}件</span>
    </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoosListItem',
  data() {
    return {
    };
  },
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    goodsClick(){
      this.$router.push('/home/goodsDetail/'+this.item.godId)
    }
  }
  
};
</script>
<style  scoped lang="scss">
  .goods-list{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin:3px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 240px;
    .img{
      width: 100%;
     
    }
    h3{
      font-size: 15px;
      font-weight: 600px;
    }
    .info{
      background: #eee;
      p{
        margin:0;
        padding: 3px;
      }
      .price{
        .new{
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>