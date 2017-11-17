import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    isLogin : false
  },
  mutations : {
    inLogin(state, bol){
      state.isLogin = bol;
    }
  },
  getters:{
    IS_LOGIN: state => {
      return state.isLogin;
    }
  }

})

export default store;
