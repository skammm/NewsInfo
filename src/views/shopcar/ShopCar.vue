<template>
  <div id="shopcar">
    <div class="mui-card" v-for="(item,index) in car" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					  <div class="firstcard">
              <!--这是一个按钮 -->
              <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
              @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
              <img :src="item.img" alt="" class="img">
              <div class="cardR">
                <h1>小米手机真好用</h1>
                <div class="sell">
                  <span class="price">￥{{item.price}}</span>
                  <!--加减按钮 -->
                  <num-box :id="item.id" 
                  ></num-box>
                  <a href="javascript:;" @click="del(item.id,index)">删除</a>
                </div>
              </div>
            </div>
					</div>
				</div>
			</div>
       <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <div class="secondcard">
              <p>总计（不含运费）</p>
              <div class="allprice">
                <p>已勾选商品<span class="red">{{$store.getters.getAllSelectd}}</span>件，
                总价:<span class="red">{{$store.getters.getAllPrice | priceFormat}}</span></p>
               <mt-button type="danger" >去结算</mt-button>
              </div>
            </div>
					</div>
				</div>
			</div>
  </div>
</template>

<script>
import NumBox from './NumBox'
export default {
  name: 'ShopCar',
  data() {
    return {
      car:this.$store.state.car,
      
    };
  },
  components:{
    NumBox
  },
  methods:{
    del(id,index){
      this.$store.commit('deleteGoods',id)
    },
    selectedChange(id,val){
      this.$store.commit('selectChange',{id,val})
    }
  },
  filters:{
    priceFormat(value){
      return '￥'+value;
    }
  }
};
</script>

<style lang="scss" scoped>
  #shopcar{
    .firstcard{
       display: flex;
       align-items: center;
       .img{
          width: 60px;
          height:60px;
        }
        .cardR{
          margin-left: 10px;
          h1{
            font-size:16px;
            height: 30px;
            line-height: 30px;
          }
          .sell{
            .price{
            color:red;
            }
            .mui-numbox{
              width:120px;
              height: 30px;
             
            }
          }
        }
    }
    .secondcard{
      .allprice{
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
          .red{
            color:red;
          }
        }
      }
    }
  }
 
</style>