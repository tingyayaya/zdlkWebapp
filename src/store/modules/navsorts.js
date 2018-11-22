import axios from 'axios';
import baseUrl from '@/assets/js/baseUrl'

const state = {
  knowledgeSorts: '',
  sportsSorts: '',
  caseSorts: '',
  issueSorts: '',
  cookiesSorts: ''
}
const getters = {
  getKnowledgeSorts(state) {
    return state.knowledgeSorts
  },
  getSportsSorts(state) {
    return state.sportsSorts
  },
  getCaseSorts(state) {
    return state.caseSorts
  },
  getIssueSorts(state) {
    return state.issueSorts
  },
  getCookiesSorts(state){
    return state.cookiesSorts
  }
}
function changeData(data){
  var len = data.length;
  var arr = []
  for(var i=0; i<len; i++){
    var datalist={};
    datalist.name = data[i]['skt10.skf92']
    arr.push(datalist)
  }

  return arr;
}

const mutations = {
  getKnowledgeSorts(state, payload) {
    state.knowledgeSorts = changeData(payload.res);
  },
  getSportsSorts(state, payload) {
    state.sportsSorts = changeData(payload.res);
  },
  getCaseSorts(state, payload) {
    state.caseSorts = changeData(payload.res);
  },
  getIssueSorts(state, payload) {
    state.issueSorts = changeData(payload.res);
  },
  getCookiesSorts(state, payload){
    state.cookiesSorts = changeData(payload.res);
  }
}
const actions = {
  
  //健康知识
  getKnowledgeSorts({commit,rootState}){
   
    var self = this;
    return new Promise((resolve, reject) => {
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/SelectArtType.jsp',
        params: {
          ArtType:'121',
        }
      })
      .then(function(res){
        commit({
          type:'getKnowledgeSorts',
          tag: 'getKnowledgeSorts',
          res: res.data.data
        })
        resolve()
      })
    })
  },
  //运动加油站分类
  getSportsSorts({commit,rootState}){
   
    var self = this;
    return new Promise((resolve, reject) => {
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/SelectArtType.jsp',
        params: {
          ArtType:'122',
        }
      })
      .then(function(res){
        commit({
          type:'getSportsSorts',
          tag: 'getSportsSorts',
          res: res.data.data
        })
        resolve()
      })
    })
  },
  //成功案例分类
  getCaseSorts({commit,rootState}){
   
    var self = this;
    return new Promise((resolve, reject) => {
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/SelectArtType.jsp',
        params: {
          ArtType:'123',
        }
      })
      .then(function(res){
        commit({
          type:'getCaseSorts',
          tag: 'getCaseSorts',
          res: res.data.data
        })
        resolve()
      })
    })
  },
  //关注的问题分类
  getIssueSorts({commit,rootState}){
   
    var self = this;
    return new Promise((resolve, reject) => {
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/SelectArtType.jsp',
        params: {
          ArtType:'124',
        }
      })
      .then(function(res){
        commit({
          type:'getIssueSorts',
          tag: 'getIssueSorts',
          res: res.data.data
        })
        resolve()
      })
    })
  },
  getCookiesSorts({commit,rootState}){
   
    var self = this;
    return new Promise((resolve, reject) => {
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/SelectArtType.jsp',
        params: {
          ArtType:'125',
        }
      })
      .then(function(res){
        commit({
          type:'getCookiesSorts',
          tag: 'getCookiesSorts',
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