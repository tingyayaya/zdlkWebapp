import axios from 'axios';
import baseUrl from '@/assets/js/baseUrl'
import errorCode from '@/assets/js/errorCode'

const state = {
  'customerF': '',
  'projextF': '',
  'complaintsF': '',
  'surveyF': '',
  'otherF': ''
}
const getters = {
  getCustomerF(state){
    return state.customerF;
  },
  
}
const mutations = {
  getCustomerF(state,payload){
    state.customerF = errorCode.arr[payload.res];
  }
}

const actions = {
  //文章详情
  getCustomerF({commit, rootState}, options) {
    state.customerF = '';
    return new Promise((resolve, reject) => {
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/insert_service.jsp',
        params: {
          'skt119.skf1896': rootState.userInfo.info.vipId,
          'skt119.skf1897': options.lx,
          'skt119.skf1898': options.score,
          'skt119.skf1899': options.content
        }
      })
      .then(function(res){
        commit({
          type:'getCustomerF',
          tag: 'getCustomerF',
          res: res.data.code
        })
        resolve()
      })
    })
  },
  
}
export default{
  state,
  getters,
  mutations,
  actions
}