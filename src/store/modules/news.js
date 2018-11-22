import axios from 'axios';
import baseUrl from '@/assets/js/baseUrl'
import errorCode from '@/assets/js/errorCode'

const state = {
  newstype: ['公司简介','公司文化','公司背景','分支机构','促销活动'],
  articleDetail: '',   //获取文章详情
  companyProfile: '',
  companyCulture: '',
  companyBackground: '',
  companyBranch: '',
  article: '',
  collect: '',
  myCollect: ''
}
const getters = {
  //接口1
  getArticleDetail(state) {
    return state.articleDetail
  },
  getCompanyProfile(state) {
    return state.companyProfile
  },
  getCompanyCulture(state) {
    return state.companyCulture
  },
  getCompanyBackground(state) {
    return state.companyBackground
  },
  getCompanyBranch(state) {
    return state.companyBranch
  },
  getSalesActivity(state){
    return state.salesActivity
  },
  //接口2
  getArticle(state) {
    return state.article
  },
  toCollect(state) {
    return state.collect;
  },
  getCollect(state){
    return state.myCollect;
  }
}

function changeData(data){
  var len = data.length;
  var arr = []
  for(var i=0; i<len; i++){
    var datalist={};
    datalist.title = data[i]['skt125.skf2214']
    datalist.time = data[i]['skt125.sf_create_time'].split(' ')[0];
    datalist.content = data[i]['skt125.skf1951']
    datalist.id = data[i]['skt125.skf1949']
    datalist.type = data[i]['skt125.skf1950']

    if(data[i]['skt138.skf2267']){
      datalist.imgs = [];
      var arr = data[i]['skt138.skf2267'].split(';');
      var len2 = arr.length-1
      for(var j=0; j<len2; j++){
        datalist.imgs.push(baseUrl.imgdownloadurl+arr[j]+'&filename='+arr[j]);
      }
    }else{
      datalist.imgs = '';
    }

    arr.push(datalist)
  }
  return arr;
}

const mutations = {
  //文章详情
  getArticleDetail(state, payload) {
    var obj = {};
    obj.content = payload.res[0]['skt125.skf1951'];
    obj.title = payload.res[0]['skt125.skf2214'];
    obj.type = payload.res[0]['skt125.skf1950'];
    obj.time = payload.res[0]['skt125.sf_create_time'].split(' ')[0];
    state.articleDetail = obj;
  },
  //文章接口1
  getCompanyProfile(state, payload) {
    if(!payload.res.length){
      return;
    }
    switch(payload.res[0]['skt125.skf1950']){
      case state.newstype[0]:
      state.companyProfile = changeData(payload.res);
      break;
      case state.newstype[1]:
      state.companyCulture = changeData(payload.res);
      break;
      case state.newstype[2]:
      state.companyBackground =changeData(payload.res)
      break;
      case state.newstype[3]:
      state.companyBranch = changeData(payload.res)
      break;
      case state.newstype[4]:
      state.salesActivity = changeData(payload.res)
      break;
    }
  },
  //文章接口2
  getArticle(state, payload) {
    state.article = changeData(payload.res)
  },
  toCollect(state, payload) {
    state.collect = errorCode.arr[payload.res];
  },
  getCollect(state, payload) {
    state.myCollect = changeData(payload.res);
  },
}
function formatNum(str){
  return str.toString().replace(/^(\d)$/, "0$1")
}
function getNowDate(){
  var date = new Date();
  return date.getFullYear() + '-' + formatNum(date.getMonth() + 1) + '-' + formatNum(date.getDate())+ ' ' + formatNum(date.getHours())+':' + formatNum(date.getMinutes())+':' + formatNum(date.getSeconds());
}
const actions = {
  //文章详情
  getArticleDetail({commit}, id) {
    state.articleDetail = '';
    axios({
      methods: 'post',
      url: baseUrl.viewer+ '/SelectArtDetail.jsp',
      params: {
        ID: id
      }
    })
    .then(function(res){
      commit({
        type:'getArticleDetail',
        tag: 'getArticleDetail',
        res: res.data.data
      })
    })
  },
  //文章接口2
  getArticle({commit}, options){
    return new Promise((resolve, reject) => {
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/SelectAllArticle.jsp',
        params: {
          lx: options.lx,
          fl: options.fl
        }
      })
      .then(function(res){
        commit({
          type:'getArticle',
          tag: 'getArticle',
          res: res.data.data
        })
        resolve()
      })
    })
  },
  //公司 
  getCompanyProfile({commit,rootState}, newstype){
    var self = this;
    return new Promise((resolve, reject) => {
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/select_news.jsp',
        params: {
          newstype: newstype,
        }
      })
      .then(function(res){
        
        commit({
          type:'getCompanyProfile',
          tag: 'getCompanyProfile',
          res: res.data.data
        })
        resolve();
       
      })
    })
  },
  toCollect({commit, rootState}, options){
    return new Promise((resolve, reject) => {
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/Insertfavorite.jsp',
        params: {
          'skt163.skf2797': rootState.userInfo.info.vipId,
          'skt163.skf2798': options.id,
          'skt163.skf2804': options.lx,
          'skt163.sf_create_time': getNowDate()
        }
      })
      .then(function(res){
        
        commit({
          type:'toCollect',
          tag: 'toCollect',
          res: res.data.code
        })
        resolve()
      })
    })
  },
  getCollect({commit, rootState}){
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/SelectFavoriteAll.jsp',
        params: {
          ID: rootState.userInfo.info.vipId,
        }
      })
      .then(function(res){
        commit({
          type:'getCollect',
          tag: 'getCollect',
          res: res.data.data
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