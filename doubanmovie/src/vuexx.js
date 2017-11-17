import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLogin: false,
        wantToSeeList: []
    },
    mutations: {
        inLogin(state, bol) {
            state.isLogin = bol;
        },
        isWantToSee(state, think) {
            state.wantToSeeList.unshift(think);
        }
    },
    getters: {
        IS_LOGIN: state => {
            return state.isLogin;
        },
        IS_THINK: state => {
            return state.wantToSeeList;
        }
    }

})

export default store;