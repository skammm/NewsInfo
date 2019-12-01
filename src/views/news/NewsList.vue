<template>
  <div id="news">
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in news" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                <span>{{item.add_time | dateFormat}}</span>
                <span>点击:{{item.clicked}}次</span>
              </p>
						</div>
					</router-link>
				</li>
			

			</ul>
  </div>
</template>

<script>
import {getNewslist} from 'network/home'
export default {
  name: 'NewsList',
  data() {
    return {
      pageIdx:1,
      news:[]
    };
  },
  created(){
     getNewslist(this.pageIdx).then(res=>{
       this.news = res.data.news;
     })
  }
  
};
</script>
<style  scoped lang="scss">
  .mui-table-view{
    li{
      h1{
        font-size: 16px;
        font-weight: 500;
      }
      .mui-ellipsis{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  
</style>