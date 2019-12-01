<template>
  <div class="grid">
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <router-link to="/home/newslist">
		  <img src="~assets/img/x21.jpg" alt="">
		  <div class="mui-media-body">Home</div></router-link></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <router-link to="/home/newspic">
		   <img src="~assets/img/x26.jpg" alt="">
		  <div class="mui-media-body">Email</div></router-link></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <router-link to="/home/goodsinfo">
		  <img src="~assets/img/x25.jpg" alt="">
		  <div class="mui-media-body">Chat</div></router-link></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		   <img src="~assets/img/x24.jpg" alt="">
		  <div class="mui-media-body
      ">location</div></a></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		   <img src="~assets/img/x23.jpg" alt="">
		  <div class="mui-media-body">Search</div></a></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		   <img src="~assets/img/x22.jpg" alt="">
		  <div class="mui-media-body">Phone</div></a></li>		          
	</ul> 

  </div>
</template>

<script>
export default {
  name: 'GridView',
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border:0;
    
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
      border: 0;
    }
  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

</style>