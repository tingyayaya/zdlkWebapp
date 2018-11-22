import axios from 'axios';
import baseUrl from '@/assets/js/baseUrl'
import errorCode from '@/assets/js/errorCode'

const state = {
  contrastPhoto: [],
  amongPhoto: []
}
const getters = {
  getContrastPhoto(state) {
    return state.contrastPhoto
  },
  getAmongPhoto(state) {
    return state.amongPhoto
  }
}
const mutations = {
  getContrastPhoto(state, payload){
    var len = payload.res.length;
    var dataList = []
    for(var i=0; i<len; i++){
      var obj = {};
      obj.time = payload.res[i]['skt146.skf2472'];
      obj.title = payload.res[i]['skt146.skf2462']
      if(payload.res[i]['skt146.skf2463']){
        obj.imgs = [];
        var arr = payload.res[i]['skt146.skf2463'].split(';');
        var len2 = arr.length
       
        for(var j=0; j<len2; j++){
          if(arr[j]){
            obj.imgs.push(baseUrl.imgdownloadurl+arr[j]+'&filename='+arr[j]);
          }
        }
       
      }else{
        obj.imgs = '';
        continue;
      }
      dataList.push(obj)
    }
    state.contrastPhoto = dataList
  },
  getAmongPhoto(state, payload){
    var len = payload.res.length;
    var dataList = []
    for(var i=0; i<len; i++){
      var obj = {};
      obj.time = payload.res[i]['skt146.skf2472'];
      obj.title = payload.res[i]['skt146.skf2462']
      if(payload.res[i]['skt146.skf2463']){
        obj.imgs = [];
        var arr = payload.res[i]['skt146.skf2463'].split(';');
        var len2 = arr.length
        for(var j=0; j<len2; j++){
          if(arr[j]){
            obj.imgs.push(baseUrl.imgdownloadurl+arr[j]+'&filename='+arr[j]);
          }
        }
      }else{
        obj.imgs = '';
        continue;
      }
      dataList.push(obj)
    }
    state.amongPhoto = dataList
  }
}
const actions = {
  getContrastPhoto({commit,rootState}){
   
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/Select_photo.jsp',
        params: {
          ID: rootState.userInfo.info.vipId,
        }
      })
      .then(function(res){
        commit({
          type:'getContrastPhoto',
          tag: 'getContrastPhoto',
          res: res.data.data
        })
      })
   
  },
  getAmongPhoto({commit,rootState}){
  
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/Select_Paper.jsp',
        params: {
          ID: rootState.userInfo.info.vipId,
        }
      })
      .then(function(res){
       
        commit({
          type:'getAmongPhoto',
          tag: 'getAmongPhoto',
          res: res.data.data
        })
      
      })
    
  },
  setContrastPhoto({commit,rootState}, options){
  
    return new Promise((resolve, reject)=>{
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/insert_Paper.jsp',
        params: {
          'skt146.skf2460': rootState.userInfo.info.vipId,
          'skt146.skf2461': options.type,
          'skt146.skf2472': options.date,
          'skt146.skf2463': options.imgs,
          'skt146.sf_create_time': options.create_time,
          'skt146.skf2462':  options.title
        }
      })
      .then(function(res){
        resolve(errorCode.arr[res.data.code])
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