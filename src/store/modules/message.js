import axios from 'axios';
import baseUrl from '@/assets/js/baseUrl'

const state = {
  fistMsg: ''
}
const getters = {
  getFistMsg(state) {
    return state.fistMsg
  }
}
const mutations = {
  getFistMsg(state, payload){ 
   state.fistMsg = payload.res;
  }
}
const actions = {
  getFistMsg({commit,rootState}){
    //console.log(rootState)
    var self = this;
    axios({
      methods: 'post',
      url: baseUrl.viewer+ '/ReturnTip1.jsp',
      params: {
        'id': rootState.userInfo.info.vipId,
      }
    })
    .then(function(res){
      if(res.data.code==0&&res.data.msg=='成功'){
        commit({
          type:'getFistMsg',
          tag: 'getFistMsg',
          res: res.data.data[0]['@ContextStr']
        })
      }
    })
  }
}
export default{
  state,
  getters,
  mutations,
  actions
}