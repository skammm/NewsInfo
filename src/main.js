import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import moment from 'moment'
import VueLazyload from 'vue-lazyload'
import VuePreview from 'vue-preview'


Vue.use(VuePreview)
Vue.use(VueLazyload, {
  loading: require('./assets/img/x21.jpg'),
})
import { Swipe, SwipeItem } from 'mint-ui';
import { Button } from 'mint-ui';
import { Header } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import { Switch } from 'mint-ui';

Vue.component(Switch.name, Switch);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);

Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


Vue.config.productionTip = false

Vue.filter('dateFormat',function(dateStr,pattern='YYYY-MM-DD HH:mm:ss'){
 return moment(dateStr).format(pattern)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
