import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]');
export default new Vuex.Store({
  state: {
    car:car
  },
  mutations: {
    addToCar(state,payLoad){
      var flag = false;
      state.car.some(item=>{
        if(item.id == payLoad.id){
          item.count+=parseInt(payLoad.count);
          flag = true;
          return true;
        }
      })
      if(!flag){
        state.car.push(payLoad)
      }
      localStorage.setItem('car',JSON.stringify(state.car));
    },
    updateGoodsInfo(state,payLoad){
      state.car.forEach(item=>{
        if(item.id == payLoad.id){
          item.count = payLoad.count
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car));
    },
    deleteGoods(state,payLoad){
      state.car.some((item,i)=>{
        if(item.id == payLoad){
          state.car.splice(i,1);
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car));
    },
    selectChange(state,payLoad){
      state.car.some(item=>{
        if(item.id == payLoad.id){
          item.checked = payLoad.val;
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car));
    }
   
  },
  actions: {
  },
  getters:{
    getAllCount(state){
      var c = 0;
      state.car.forEach(item=>{
        c += item.count
      })
      return c;
    },
    getItemCount(state){
      var obj = {}
      state.car.forEach(item=>{
        obj[item.id] = item.count
      })
      return obj;
    },
    getGoodsSelected(state){
      var obj = {}
      state.car.forEach(item=>{
        obj[item.id] = item.checked
      })
      return obj;
    },
    getAllSelectd(state){
      var count = 0;
      state.car.forEach(item=>{
        if(item.checked){
          count++;
        }
      })
      return count;
    },
    getAllPrice(state){
      var price= 0;
      state.car.forEach(item=>{
        if(item.checked){
          price += item.price*item.count;
        }
      })
      return price
    }
    
  }
})
