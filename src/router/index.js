import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const Home = () => import('../views/home/Home.vue')
const Member = () => import('../views/member/Member.vue')
const ShopCar = () => import('../views/shopcar/ShopCar.vue')
const Search = () => import('../views/search/Search.vue')
const NewsList = () => import('../views/news/NewsList')
const NewsInfo = () => import('../views/news/NewsInfo')
const NewsPic = () => import('../views/news/NewsPic')
const PhotoInfo = () => import('../views/photo/PhotoInfo')
const GoodsInfo = () => import('../views/goods/GoodsInfo')
const GoodsDetail = () => import('../views/goods/GoodsDetail')
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/member",
    component:Member
  },
  {
    path:"/shopcar",
    component:ShopCar
  },
  {
    path:"/search",
    component:Search
  },
  {
    path:'/home/newslist',
    component:NewsList
  },
  {
    path:'/home/newsinfo/:id',
    component:NewsInfo

  },
  {
    path:'/home/newspic',
    component:NewsPic
  },
  {
    path:'/home/photoinfo/:id',
    component:PhotoInfo
  },
  {
    path:'/home/goodsinfo',
    component:GoodsInfo
  },
  {
    path:'/home/goodsDetail/:id',
    component:GoodsDetail
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:"mui-active"
})

export default router
