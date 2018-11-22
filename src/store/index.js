import Vue from 'vue'; 
import Vuex from 'vuex'; 

import userInfo from './modules/userInfo'
import message from './modules/message'
import curve from './modules/curve'
import diet from './modules/diet'
import news from './modules/news'
import navsorts from './modules/navsorts'
import feedback from './modules/feedback'
import photo from './modules/photo'
import dateRemind from './modules/dateRemind'
import recodeList from './modules/recodeList'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userInfo,
    message,
    curve,
    diet,
    news,
    navsorts,
    feedback,
    photo,
    dateRemind,
    recodeList
  }
})
