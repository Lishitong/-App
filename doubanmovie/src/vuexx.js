import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLogin: false,
        wantToSeeList: [],
        wantToSee: []
    },
    mutations: {
        inLogin(state, bol) {
            state.isLogin = bol;
        },
        isWantToSee(state, think) {
            state.wantToSeeList.unshift(think);
            state.wantToSee.unshift(think.id);
        },
        isClearWantToSeeList(state) {
            state.wantToSeeList = [];
            state.wantToSee = [];
        }
    },
    getters: {
        IS_LOGIN: state => {
            return state.isLogin;
        },
        IS_THINK: state => {
            return state.wantToSeeList;
        },
        IS_LOOK: state => {
            return state.wantToSee;
        }
    }

})

export default store;