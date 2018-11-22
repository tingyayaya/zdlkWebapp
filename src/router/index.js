import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/views/PageView'
import homeView from '@/views/homeView'
import contactView from '@/views/contactView'
import healthView from '@/views/healthView'
import mallView from '@/views/mallView'
import mineView from '@/views/mineView'

//消息
import messageView from '@/views/msg/messageView'
import msgDetailView from '@/views/msg/msgDetailView'

//联系人
import dietView from '@/views/contact/dietView'
import doctorView from '@/views/contact/doctorView'
import friendView from '@/views/contact/friendView'
import lineView from '@/views/contact/lineView'

// 关注健康
import companyView from '@/views/company/companyView'
import newsView from '@/views/company/newsView'
import newsDetailView from '@/views/company/newsDetailView'
import aboutusView from '@/views/company/aboutusView'
import aboutusDeView from '@/views/company/aboutusDeView'
import salesView from '@/views/company/salesView'
import salesDeView from '@/views/company/salesDeView'
import branchView from '@/views/company/branchView'

import knowledgeView from '@/views/knowledge/knowledgeView'
import knowledgeDeView from '@/views/knowledge/knowledgeDeView'

import sportsView from '@/views/sports/sportsView'
import sportsDeView from '@/views/sports/sportsDeView'

import caseView from '@/views/case/caseView'
import caseDeView from '@/views/case/caseDeView'

import questionView from '@/views/question/questionView'
import questionDeView from '@/views/question/questionDeView'
import questionSearchView from '@/views/question/questionSearchView'

import cookView from '@/views/cook/cookView'
import cookDeView from '@/views/cook/cookDeView'
import cookSearchView from '@/views/cook/cookSearchView'
//个人中心
import myCodeView from '@/views/userInfo/myCodeView'

import userInfoView from '@/views/userInfo/userInfoView'
import editInfoView from '@/views/userInfo/editInfoView'
import personDataView from '@/views/userInfo/personDataView'
import editPersonDataView from '@/views/userInfo/editPersonDataView'
import edit2PersonDataView from '@/views/userInfo/edit2PersonDataView'

import myCollectDeView from '@/views/mine/myCollectDeView'
import myCollectView from '@/views/mine/myCollectView'
import myReportView from '@/views/mine/myReportView'
import uploadReportView from '@/views/mine/uploadReportPic'
import myCompPicView from '@/views/mine/myCompPicView'
import uploadCompView from '@/views/mine/uploadCompPic'
import agreementView from '@/views/mine/agreementView'
import setView from '@/views/mine/setView'

import feedBackView from '@/views/feedback/feedBackView'
import satisfactionView from '@/views/feedback/satisfactionView'
import productQView from '@/views/feedback/productQView'
import otherView from '@/views/feedback/otherView'
import customerQView from '@/views/feedback/customerQView'
import complaintView from '@/views/feedback/complaintView'

import recordView from '@/views/record/recordView'
import recordSugarView from '@/views/record/recordSugarView'
import recordFoodView from '@/views/record/recordFoodView'
import recordUrineView from '@/views/record/recordUrineView'
import recordWeightView from '@/views/record/recordWeightView'
import recordSportView from '@/views/record/recordSportView'
import recordWaistView from '@/views/record/recordWaistView'
import recordPressureView from '@/views/record/recordPressureView'

//首页的子页面
import foodListView from '@/views/home/foodListView'
import sugarListView from '@/views/home/sugarListView'
import urineListView from '@/views/home/urineListView'
import weightListView from '@/views/home/weightListView'
import sportsListView from '@/views/home/sportsListView'
import pressureListView from '@/views/home/pressureListView'
import waistListView from '@/views/home/waistListView'

import weightCurveView from '@/views/home/weightCurveView'
import sugarCurveView from '@/views/home/sugarCurveView'
import urineCurveView from '@/views/home/urineCurveView'
import waistCurveView from '@/views/home/waistCurveView'
import pressureCurveView from '@/views/home/pressureCurveView'

import weightMoreView from '@/views/home/weightMoreView'
import sugarMoreView from '@/views/home/sugarMoreView'
import urineMoreView from '@/views/home/urineMoreView'
import sportsMoreView from '@/views/home/sportsMoreView'
import waistMoreView from '@/views/home/waistMoreView'
import pressureMoreView from '@/views/home/pressureMoreView'

//日程提醒
import reminderView from '@/views/reminder/reminderView'
import addRemListView from '@/views/reminder/addRemListView'

//登录注册
import loginView from '@/views/login&reg/loginView'
import registView from '@/views/login&reg/registView'
import passwordView from '@/views/login&reg/passwordView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages'
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
          component: mineView
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
      redirect: '/companyView/newsView/0',
      children: [
        {
          path: 'newsView/:activeId',
          name: 'newsView',
          component: newsView
        },{
          path: 'aboutusView/:activeId',
          name: 'aboutusView',
          component: aboutusView
        },{
          path: 'salesView/:activeId',
          name: 'salesView',
          component: salesView
        },{
          path: 'branchView/:activeId',
          name: 'branchView',
          component: branchView
        }
      ]
    },
    {
      path: '/knowledgeView',
      component: knowledgeView,
      name: 'knowledgeView'
    },
    {
      path: '/newsDetailView',
      name: 'newsDetailView',
      component: newsDetailView
    },
    {
      path: '/aboutusDeView',
      name: 'aboutusDeView',
      component: aboutusDeView
    },
    {
      path: '/salesDeView',
      name: 'salesDeView',
      component: salesDeView
    },
    {
      path: '/knowledgeDeView',
      name: 'knowledgeDeView',
      component: knowledgeDeView
    },
    {
      path: '/sportsView',
      name: 'sportsView',
      component: sportsView
    },
    {
      path: '/sportsDeView',
      name: 'sportsDeView',
      component: sportsDeView
    },
    {
      path: '/caseDeView',
      name: 'caseDeView',
      component: caseDeView
    },
    {
      path: '/caseView',
      name: 'caseView',
      component: caseView
    },
    {
      path: '/questionView',
      name: 'questionView',
      component: questionView
    },
    {
      path: '/questionDeView',
      name: 'questionDeView',
      component: questionDeView
    },
    {
      path: '/questionSearchView',
      name: 'questionSearchView',
      component: questionSearchView
    },
    {
      path: '/cookView',
      name: 'cookView',
      component: cookView
    },
    {
      path: '/cookDeView',
      name: 'cookDeView',
      component: cookDeView
    },
    {
      path: '/cookSearchView',
      name: 'cookSearchView',
      component: cookSearchView
    },
    {
      path: '/userInfoView',
      name: 'userInfoView',
      component: userInfoView
    },
    {
      path: '/editInfoView',
      name: 'editInfoView',
      component: editInfoView
    },
    {
      path: '/editPersonDataView',
      name: 'editPersonDataView',
      component: editPersonDataView
    },
    {
      path: '/edit2PersonDataView',
      name: 'edit2PersonDataView',
      component: edit2PersonDataView
    },
    {
      path: '/personDataView',
      name: 'personDataView',
      component: personDataView
    },
    {
      path: '/myCodeView',
      name: 'myCodeView',
      component: myCodeView
    },
    {
      path: '/myCollectView',
      name: 'myCollectView',
      component: myCollectView
    },
    {
      path: '/myCollectDeView',
      name: 'myCollectDeView',
      component: myCollectDeView
    },
    {
      path: '/myReportView',
      name: 'myReportView',
      component: myReportView
    },
    {
      path: '/uploadReportView',
      name: 'uploadReportView',
      component: uploadReportView
    },
    {
      path: '/uploadCompView',
      name: 'uploadCompView',
      component: uploadCompView
    },
    {
      path: '/myCompPicView',
      name: 'myCompPicView',
      component: myCompPicView
    },
    {
      path: '/agreementView',
      name: 'agreementView',
      component: agreementView
    },
    {
      path: '/feedBackView',
      name: 'feedBackView',
      component: feedBackView
    },
    {
      path: '/complaintView',
      name: 'complaintView',
      component: complaintView
    },
    {
      path: '/customerQView',
      name: 'customerQView',
      component: customerQView
    },
    {
      path: '/otherView',
      name: 'otherView',
      component: otherView
    },
    {
      path: '/productQView',
      name: 'productQView',
      component: productQView
    },
    {
      path: '/satisfactionView',
      name: 'satisfactionView',
      component: satisfactionView
    },
    {
      path: '/recordView',
      name: 'recordView',
      component: recordView
    },
    {
      path: '/recordFoodView',
      name: 'recordFoodView',
      component: recordFoodView
    },
    {
      path: '/recordWeightView',
      name: 'recordWeightView',
      component: recordWeightView
    },
    {
      path: '/recordUrineView',
      name: 'recordUrineView',
      component: recordUrineView
    },
    {
      path: '/recordSugarView',
      name: 'recordSugarView',
      component: recordSugarView
    },
    {
      path: '/recordSportView',
      name: 'recordSportView',
      component: recordSportView
    },
    {
      path: '/recordPressureView',
      name: 'recordPressureView',
      component: recordPressureView
    },
    {
      path: '/recordWaistView',
      name: 'recordWaistView',
      component: recordWaistView
    },
    {
      path: '/foodListView',
      name: 'foodListView',
      component: foodListView
    },
    {
      path: '/sugarListView',
      name: 'sugarListView',
      component: sugarListView
    },
    {
      path: '/urineListView',
      name: 'urineListView',
      component: urineListView
    },
    {
      path: '/weightListView',
      name: 'weightListView',
      component: weightListView
    },
    {
      path: '/pressureListView',
      name: 'pressureListView',
      component: pressureListView
    },
    {
      path: '/waistListView',
      name: 'waistListView',
      component: waistListView
    },
    {
      path: '/sportsListView',
      name: 'sportsListView',
      component: sportsListView
    },
    {
      path: '/weightCurveView',
      name: 'weightCurveView',
      component: weightCurveView
    },
    {
      path: '/sugarCurveView',
      name: 'sugarCurveView',
      component: sugarCurveView
    },
    {
      path: '/urineCurveView',
      name: 'urineCurveView',
      component: urineCurveView
    },
    {
      path: '/waistCurveView',
      name: 'waistCurveView',
      component: waistCurveView
    },
    {
      path: '/pressureCurveView',
      name: 'pressureCurveView',
      component: pressureCurveView
    },
    {
      path: '/urineMoreView',
      name: 'urineMoreView',
      component: urineMoreView
    },
    {
      path: '/weightMoreView',
      name: 'weightMoreView',
      component: weightMoreView
    },
    {
      path: '/sugarMoreView',
      name: 'sugarMoreView',
      component: sugarMoreView
    },
    {
      path: '/sportsMoreView',
      name: 'sportsMoreView',
      component: sportsMoreView
    },
    {
      path: '/waistMoreView',
      name: 'waistMoreView',
      component: waistMoreView
    },
    {
      path: '/pressureMoreView',
      name: 'pressureMoreView',
      component: pressureMoreView
    },
    {
      path: '/reminderView',
      name: 'reminderView',
      component: reminderView
    },{
      path: '/addRemListView',
      name: 'addRemListView',
      component: addRemListView
    },
    {
      path: '/registView',
      name: 'registView',
      component: registView
    },
    {
      path: '/loginView',
      name: 'loginView',
      component: loginView
    },
    { 
      path: '/passwordView',
      name: 'passwordView',
      component: passwordView
    },
    {
      path: '/setView',
      name: 'setView',
      component: setView
    }
  ]
})
