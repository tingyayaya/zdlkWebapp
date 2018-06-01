import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/views/PageView'
import homeView from '@/views/homeView'
import contactView from '@/views/contactView'
import healthView from '@/views/healthView'
import mallView from '@/views/mallView'
import mineView from '@/views/mineView'
import messageView from '@/views/messageView'
import msgDetailView from '@/views/msgDetailView'
import dietRecordView from '@/views/dietRecordView'
import dietView from '@/views/dietView'
import doctorView from '@/views/doctorView'
import friendView from '@/views/friendView'
import lineView from '@/views/lineView'
import companyView from '@/views/health/companyView'
import newsView from '@/views/health/newsView'
import newsDetailView from '@/views/health/newsDetailView'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PageView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },{
          path: 'home',
          name: 'homeView',
          component: homeView
        },{
          path: 'contact',
          name: 'contactView',
          component: contactView,
        },
        {
          path: 'health',
          name: 'healthView',
          component: healthView
        },
        {
          path: 'mall',
          name: 'mallView',
          component: mallView
        },
        {
          path: 'mine',
          name: 'mineView',
          component: contactView
        }
      ]
    },
    {
      path: '/message',
      name: 'messageView',
      component: messageView
    },
    {
      path: '/msgDetailView',
      name: 'msgDetailView',
      component: msgDetailView
    },
    {
      path: '/dietRecordView',
      name: 'dietRecordView',
      component: dietRecordView
    },
    {
      path: '/dietView',
      name: 'dietView',
      component: dietView
    },
    {
      path: '/doctorView',
      name: 'doctorView',
      component: doctorView
    },
    {
      path: '/friendView',
      name: 'friendView',
      component: friendView
    },
    {
      path: '/lineView',
      name: 'lineView',
      component: lineView
    },
    {
      path: '/companyView',
      component: companyView,
      name: 'companyView',
      redirect: '/companyView/newsView',
      children: [
        {
          path: 'newsView',
          name: 'newsView',
          component: newsView
        }
      ]
    },
    {
      path: '/newsDetailView',
      name: 'newsDetailView',
      component: newsDetailView
    }
  ]
})
