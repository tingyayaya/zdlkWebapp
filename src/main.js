// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import vueEventCalendar from 'vue-event-calendar'
import axios from 'axios'

import 'vue-event-calendar/dist/style.css'
import 'mint-ui/lib/style.css'
import 'lib-flexible/flexible'
import './assets/css/reset.css'
import './assets/css/iconfont.css'


Vue.use(MintUI)
//日历
Vue.use(vueEventCalendar, {locale: 'zh',color: '#AACB3C',className: 'selected-day'})

Vue.config.productionTip = false

//保存token变量
Vue.prototype.MYTOKEN = '1EDZHKNARZ4M';

//设置baseURL
axios.defaults.baseURL = 'http://hz.chenksoft.com:8080/ckapi/api/156';
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
