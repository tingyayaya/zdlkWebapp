// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import MintUI from 'mint-ui'
import vueEventCalendar from 'vue-event-calendar'
import axios from 'axios'
import baseurl from './assets/js/baseUrl'
import errorcode from './assets/js/errorCode'

import 'babel-polyfill'
import 'vue-event-calendar/dist/style.css'
import 'mint-ui/lib/style.css'
// import 'lib-flexible/flexible'

import './assets/css/reset.css'
import './assets/css/iconfont.css'
import './assets/js/fontsize'

Vue.use(MintUI)
//日历
Vue.use(vueEventCalendar, {locale: 'zh',color: '#AACB3C',className: 'selected-day'})

Vue.config.productionTip = false


//设置baseURL
Vue.prototype.$axios = axios;
Vue.prototype.baseurl = baseurl;
Vue.prototype.errorcode = errorcode;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
