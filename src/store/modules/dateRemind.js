import axios from 'axios';
import baseUrl from '@/assets/js/baseUrl'
import errorCode from '@/assets/js/errorCode'

const state = {
  schedule: []
}
const getters = {
  getSchedule(state) {
    return state.schedule
  }
 
}
const mutations = {
  getSchedule(state, payload){
    var len = payload.res.length;
    var dataList = []
    for(var i=0; i<len; i++){
      var obj = {};
      obj.date = payload.res[i]['skt168.skf2873'];
      obj.remindTime = payload.res[i]['skt168.skf2876'];
      obj.title = payload.res[i]['skt168.skf2874'];
      obj.desc = payload.res[i]['skt168.skf2875'];
      dataList.push(obj)
    }
    state.schedule = dataList
  }
 
}
const actions = {
  getSchedule({commit,rootState}, options){
  
    return new Promise(function(resolve, reject){
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/select_date.jsp',
        params: {
          id: rootState.userInfo.info.vipId,
          rq: options
        }
      })
      .then(function(res){
        commit({
          type:'getSchedule',
          tag: 'getSchedule',
          res: res.data.data
        })
        resolve()
      })
    })
  },
  setChedule({commit,rootState}, options){
    return new Promise((resolve, reject) => {
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/insert_date.jsp',
        params: {
          'skt168.skf2881': rootState.userInfo.info.vipId,
          'skt168.skf2873': options.date,
          'skt168.skf2874': options.title,
          'skt168.skf2875': options.desc,
          'skt168.skf2876': options.remindTime,
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