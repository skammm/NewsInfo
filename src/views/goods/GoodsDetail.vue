<template>
  <div class="detail">
     <transition
      @before-enter="beforeEnter"
      @enter="enter" @after-enter="afterEnter">
        <div class="ball" v-show="flag" ref="ball"></div>
     </transition>
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :swiper-list="swiperList"/>
					</div>
				</div>
			</div>
    <div class="mui-card">
				<div class="mui-card-header">{{goodsBuy.name}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="price">
              <span class="new">市场价:￥{{goodsBuy.newPrice}}</span>
              <span class="old">销售价:￥{{goodsBuy.oldPrice}}</span>
            </div>
            <div>
              购买数量:
              <num-box :max="goodsBuy.quantity" @getNumber="getCount"/>
            </div>
            <div class="shopcar">
               <mt-button type="primary">立即购买</mt-button>
               <mt-button type="danger"  @click="addToCar" >加入购物车</mt-button>
            </div>
					</div>
				</div>
			</div>
    <div class="mui-card">
				<div class="mui-card-header">
          商品参数
        </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{goodsBuy.godNum}}</p>
            <p>库存情况：{{goodsBuy.quantity}}件</p>
            <p>上架时间：{{goodsBuy.addDate | dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
          <mt-button type="primary" size="large">图文介绍</mt-button>
          <mt-button type="danger" size="large">商品评论</mt-button>
        </div>
			</div>
  </div>
</template>

<script>
import {getGoodsDetail} from 'network/goods'
import Swiper from 'components/common/swiper/Swiper'
import NumBox from './gooddetailChild/NumBox'
export default {
  name: 'GoodsDetail',
  data() {
    return {
      swiperList:[],
      goodsBuy:{},
      flag:false,
      count:0,
      id:this.$route.params.id

    };
  },
  created(){
    getGoodsDetail(this.id).then(res=>{
      
      this.swiperList = res.data.god.imgIntro;
      this.goodsBuy =  res.data.god
      console.log(this.goodsBuy)
    })
  },
  components:{
    Swiper,
    NumBox
  },
  methods:{
    beforeEnter(el){
        el.style.transform = 'translate(0,0)';
    
      },
      enter(el,done){
        el.offsetWidth
        el.style.transition = 'all 1s'

        const ballPosition = this.$refs.ball.getBoundingClientRect();
        const badgePosition = document.getElementById('badge').getBoundingClientRect();

        var x = badgePosition.left - ballPosition.left;
        var y = badgePosition.top - ballPosition.top;
        
        el.style.transform = `translate(${x}px,${y}px)`;
        done()
      },
      afterEnter(el){
        this.flag = !this.flag
      },
      addToCar(){
        this.flag=!this.flag;
        var carList = {}
        var carList ={
          id:this.goodsBuy.godId,
          count:this.count,
          price:this.goodsBuy.newPrice,
          checked:false,
          max:this.goodsBuy.quantity,
          img:this.goodsBuy.phos[0]
        }
        this.$store.commit('addToCar',carList)
      },
      getCount(count){
        this.count = count
      }
  }
};
</script>
<style  scoped lang="scss">
  
  .detail{
    .ball{
      width:10px;
      height: 10px;
      border-radius: 50%;
      background: red;
      position: absolute;
      top:420px;
      left: 130px;
      z-index: 99;
    }
    .mint-swipe{
    height: 200px;
    }
    .mint-swipe img{
      width: 100%;
    }
    .price{
      padding: 5px 0;
      .new{
        color: red;
      }
      .old{
        text-decoration: line-through;
        margin-left: 15px;
      }
    }
    .shopcar{
      margin-top:8px;
      .mint-button{
        height: 35px;
      }
    }
    .mui-card-footer, .mui-card-header{
      display: block;
      .mint-button{
        margin:5px 5px;
      }
    }
  }
</style>