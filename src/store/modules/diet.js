import axios from 'axios';
import baseUrl from '@/assets/js/baseUrl'

const state = {
  curDiet: []
}
const getters = {
  getCurDiet(state) {
    return state.curDiet
  }
}
const mutations = {
  getCurDiet(state, payload){
    var len = payload.res.length;
    var dataList = []
    for(var i=0; i<len; i++){
      var obj = {};
      obj.time = payload.res[i]['skt138.skf2264'];
      obj.content = payload.res[i]['skt138.skf2281']
      //早餐中餐晚餐夜宵 11 12 13 14
      switch(payload.res[i]['skt138.skf2266']){
        case '11':
        obj.sortType = '早餐';
        break;
        case '12':
        obj.sortType = '午餐';
        break;
        case '13':
        obj.sortType = '晚餐';
        break;
        case '14':
        obj.sortType = '夜宵';
        break;
      }

      if(payload.res[i]['skt138.skf2267']){
        obj.imgs = [];
        var arr = payload.res[i]['skt138.skf2267'].split(';');
        var len2 = arr.length-1
        for(var j=0; j<len2; j++){
          obj.imgs.push(baseUrl.imgdownloadurl+arr[j]+'&filename='+arr[j]);
        }
      }else{
        obj.imgs = '';
      }
      dataList.push(obj)
    }
    state.curDiet = dataList
  }
}
const actions = {
  //获取四餐
  getCurDiet({commit,rootState}, date){
    var self = this;
    return new Promise((resolve, reject) => {
        axios({
          methods: 'post',
          url: baseUrl.viewer+ '/Select6.jsp',
          params: {
            id: rootState.userInfo.info.vipId,
            rq: date
          }
        })
        .then(function(res){
          commit({
            type:'getCurDiet',
            tag: 'getCurDiet',
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