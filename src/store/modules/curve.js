import axios from 'axios';
import baseUrl from '@/assets/js/baseUrl'

const state = {
  localInterval: [],
  waistList: '',
  weightList: '',
  urineList: '',
  sugarList: '',
  systolicPressureList: '',   //收缩压
  diastolicPressureList: ''   //舒张压
}
const getters = {
  getDiastolicPressureList(state) {
    return state.diastolicPressureList
  },
  getSystolicPressureList(state) {
    return state.systolicPressureList
  },
  getSugarList(state) {
    return state.sugarList
  },
  getUrineList(state) {
    return state.urineList
  },
  getWeightList(state) {
    return state.weightList
  },
  getWaistList(state) {
    return state.waistList
  }
}
const mutations = {
  getDiastolicPressureList(state, payload){
    var len = payload.res.length;
    var datalist=[];
    for(var i=0; i<len; i++){
      var obj = {};
      obj.name = payload.res[i]['skt138.skf2264'];
      obj.y = payload.res[i]['skt138.skf2265'];
      datalist.push(obj)
    }
    state.diastolicPressureList = datalist;
  },
  getSystolicPressureList(state, payload){
    var len = payload.res.length;
    console.log(payload.res)
    var datalist=[];
    for(var i=0; i<len; i++){
      var obj = {};
      obj.name = payload.res[i]['skt138.skf2264'];
      obj.y = payload.res[i]['skt138.skf2795'];
      datalist.push(obj)
    }
    state.systolicPressureList = datalist;
  },
  getSugarList(state, payload){
    var len = payload.res.length;
    var datalist=[];
    for(var i=0; i<len; i++){
      var obj = {};
      obj.name = payload.res[i]['skt138.skf2264'];
      obj.y = payload.res[i]['skt138.skf2265'];
      datalist.push(obj)
    }
    state.sugarList = datalist;
  },
  getUrineList(state, payload){
    var len = payload.res.length;
    var datalist=[];
    for(var i=0; i<len; i++){
      var obj = {};
      obj.name = payload.res[i]['skt138.skf2264'];
      obj.y = payload.res[i]['skt138.skf2265'];
      datalist.push(obj)
    }
    state.urineList = datalist;
  },
  getWeightList(state, payload){
    var len = payload.res.length;
    var datalist=[];
    for(var i=0; i<len; i++){
      var obj = {};
      obj.name = payload.res[i]['skt138.skf2264'];
      obj.y = payload.res[i]['skt138.skf2265'];
      datalist.push(obj)
    }
    state.weightList = datalist;
  },
  getWaistList(state, payload){ 
    var len = payload.res.length;
    var datalist=[];
    for(var i=0; i<len; i++){
      var obj = {};
      obj.name = payload.res[i]['skt138.skf2264'];
      obj.y = payload.res[i]['skt138.skf2265'];
      datalist.push(obj)
    }
    state.waistList = datalist;
  },
  getDate(state){
    var date = new Date();
    state.localInterval[0] = date.getFullYear() + '-' + formatNum(date.getMonth() + 1) + '-01';
    state.localInterval[1] = date.getFullYear() + '-' + formatNum(date.getMonth() + 1) + '-' + formatNum(date.getDate());
    function formatNum(num) {
      return num.toString().replace(/^(\d)$/, "0$1")    
    }
  }
}
const actions = {
  //舒张压
  getDiastolicPressureList({commit,rootState}, date){
    
    var date =date||state.localInterval;
    var self = this;
    return new Promise((resolve, reject) => {
        axios({
          methods: 'post',
          url: baseUrl.viewer+ '/Select3_1_1.jsp',
          params: {
            ID: rootState.userInfo.info.vipId,
            lb: '5',
            'rq1': date[0],
            'rq2': date[1],
          }
        })
        .then(function(res){
            commit({
              type:'getDiastolicPressureList',
              tag: 'getDiastolicPressureList',
              res: res.data.data
            })
            resolve()
        })
       
    })
  },
  //收缩压
  getSystolicPressureList({commit,rootState}, date){
    
    var date =date||state.localInterval;
    var self = this;
    return new Promise((resolve, reject) => {
        axios({
          methods: 'post',
          url: baseUrl.viewer+ '/Select3_1_2.jsp',
          params: {
            ID: rootState.userInfo.info.vipId,
            lb: '5',
            'rq1': date[0],
            'rq2': date[1],
          }
        })
        .then(function(res){
          
            commit({
              type:'getSystolicPressureList',
              tag: 'getSystolicPressureList',
              res: res.data.data
            })
            resolve()
        
        })
       
    })
  },
  //血糖
  getSugarList({commit,rootState}, date){
    
    var date =date||state.localInterval;
    var self = this;
    return new Promise((resolve, reject) => {
        axios({
          methods: 'post',
          url: baseUrl.viewer+ '/Select5.jsp',
          params: {
            ID: rootState.userInfo.info.vipId,
            lb: '5',
            'rq1': date[0],
            'rq2': date[1],
          }
        })
        .then(function(res){
            
            commit({
              type:'getSugarList',
              tag: 'getSugarList',
              res: res.data.data
            })
            resolve()
          
        })
       
    })
  },
  //尿酮
  getUrineList({commit,rootState}, date){
    
    var date =date||state.localInterval;
    var self = this;
    return new Promise((resolve, reject) => {
        axios({
          methods: 'post',
          url: baseUrl.viewer+ '/Select2.jsp',
          params: {
            ID: rootState.userInfo.info.vipId,
            'rq1': date[0],
            'rq2': date[1],
          }
        })
        .then(function(res){
            commit({
              type:'getUrineList',
              tag: 'getUrineList',
              res: res.data.data
            })
            resolve()
        })
       
    })
  },
  //体重
  getWeightList({commit,rootState}, date){
    
    var date =date||state.localInterval;
    var self = this;
    return new Promise((resolve, reject) => {
        axios({
          methods: 'post',
          url: baseUrl.viewer+ '/Select1.jsp',
          params: {
            ID: rootState.userInfo.info.vipId,
            'rq1': date[0],
            'rq2': date[1],
          }
        })
        .then(function(res){
        
            commit({
              type:'getWeightList',
              tag: 'getWeightList',
              res: res.data.data
            })
            resolve()
        })
       
    })
  },
  //腰围
  getWaistList({commit,rootState}, date){
    
    var date =date||state.localInterval;
    var self = this;
    return new Promise((resolve, reject) => {
        axios({
          methods: 'post',
          url: baseUrl.viewer+ '/Select4.jsp',
          params: {
            ID: rootState.userInfo.info.vipId,
            'rq1': date[0],
            'rq2': date[1],
          }
        })
        .then(function(res){
          commit({
            type:'getWaistList',
            tag: 'getWaistList',
            res: res.data.data
          })
          resolve()
        })
       
    })
  }
}
export default{
  state,
  getters,
  mutations,
  actions
}