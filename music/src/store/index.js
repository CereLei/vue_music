//入口初始化
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
//注射插件
Vue.use(Vuex)

const debug = process.env.NODE_ENV

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    strict:debug,//上线不使用这个严格模式
    plugins:debug?[createLogger()]:[]
})

