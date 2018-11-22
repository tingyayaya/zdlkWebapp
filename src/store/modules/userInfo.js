import axios from 'axios';
import baseUrl from '@/assets/js/baseUrl';
import errorCode from '@/assets/js/errorCode';

let user = JSON.parse(localStorage.getItem('userInfoState'));
const state = {
  info: {
    name: '',
    cardId: '',
    gender: '',
    professional: '',
    height: '',
    weight: '',
    vipId: user ? user.userInfoState.vipID : '',
    tel: user ? user.userInfoState.tel : '',
  },
  updateType: ''
}

const getters = {
  getInfo: function(state){
    return  state.info;
  },
  updateInfo: function(state){
    return  state.updateType;
  }
}

//提交
const mutations = {
  getInfo(state, payload){
    state.info.name = payload.res['skt82.skf1248']? payload.res['skt82.skf1248']:'用户';
    state.info.cardId = payload.res['skt82.skf1252'];
    state.info.gender = payload.res['skt82.skf1249']==0 ?'女':'男';
    state.info.professional = payload.res['skt82.skf1250'];
    state.info.height = payload.res['skt82.skf1264'];
    state.info.weight = payload.res['skt82.skf1265'];
    state.info.waist = payload.res['skt82.skf2786'];
    state.info.hip = payload.res['skt82.skf2787'];
  },
  updateInfo(state, payload){
    state.updateType = payload.res;
  },
  updateVipId(state, payload){
    state.info.vipId = payload.vipID;
    state.info.tel =  payload.tel;
  },
  updateVipId2(state, payload){
    state.info.vipId = payload.res.vipID;
    state.info.tel =  payload.res.tel;
  }
}

//异步提交
const actions = {
  //获取用户信息
  getInfo(context){
    var self = this;
    axios({
      methods: 'post',
      url: baseUrl.viewer+ '/Select_Member.jsp',
      params: {
        token: '',
        id: state.info.vipId,
      }
    })
    .then(function(res){
      //console.log(res)
      if(res.data.code==0&&res.data.data.length!=0){
        //console.log(res.data.data)
        context.commit({
          type:'getInfo',
          tag: 'getInfo',
          res: res.data.data[0]
        })
      }
    })
  },
  updateInfo({ commit }, info){
    var self = this;
    return new Promise((resolve, reject) => {
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/Update_Member.jsp',
        params: {
          'skt82.skf1248': info.name,
          'skt82.skf1252': info.cardId,
          'skt82.skf1249': info.gender=='男' ?'1':'0',
          'skt82.skf1250': info.professional,
          'skt82.skf1264': info.height,
          'skt82.skf1265': info.weight,
          'skt82.skf1246': state.info.vipId,
          'skt82.skf2786': info.waist,
          'skt82.skf2787': info.hip
        }
      })
      .then(function(res){
        if(res.data.code==0&&res.data.msg=='成功'){
          commit({
            type:'updateInfo',
            tag: 'updateInfo',
            res: res.data.code
          })

        }else{
          commit({
            type:'updateInfo',
            tag: 'updateInfo',
            res: res.data.code
          })
          resolve()
        }
      })
    })
  },
  updatePhone({ commit, rootState}, info) {
    var self = this;

    return new Promise((resolve, reject) =>{
      axios({
        methods: 'post',
        url: baseUrl.viewer+ '/Update_Phone.jsp',
        params: {
          'skt82.skf1246': rootState.userInfo.info.vipId,
          'skt82.skf1253': info.phone,
        }
      })
      .then(function(res){

        if(res.data.code==0){
          var userInfoState = {
            vipID: rootState.userInfo.info.vipId,
            tel: info.phone
          }
        
          localStorage.setItem('userInfoState', JSON.stringify({
            userInfoState, 
            timestamp: new Date().getTime()
          }));
        }
        resolve(errorCode.arr[res.data.code])
        
        commit({
          type: 'updateVipId2',
          tag: 'updateVipId2',
          res: userInfoState
        })
      })

    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
