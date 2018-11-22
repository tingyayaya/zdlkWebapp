import axios from 'axios';
import baseUrl from '@/assets/js/baseUrl'

const state = {
  recodeList1: [],
  recodeList2: [],
  recodeList4: [],
  recodeList3: [],
  recodeList7: [],
  recodeListDiet: [],
  recodeListSugar: [],
}
const getters = {
  getRecodeList1(state) {
    changeUnit(state.recodeList1, 'kg')
    return state.recodeList1
  },
  getRecodeList1Last(state) {
    var len = state.recodeList1.length
    changeUnit(state.recodeList1, 'kg')
    return state.recodeList1.slice(len-1,len);
  },
  getRecodeList2(state) {
    changeUnit(state.recodeList2, '+')
    return state.recodeList2
  },
  getRecodeList2Last(state) {
    var len = state.recodeList2.length
    changeUnit(state.recodeList2, '+')
    return state.recodeList2.slice(len-1,len);
  },
  getRecodeList4(state) {
    changeUnit(state.recodeList4, 'cm')
    return state.recodeList4
  },
  getRecodeList4Last(state) {
    var len = state.recodeList4.length
    changeUnit(state.recodeList4, 'cm')
    return state.recodeList4.slice(len-1,len);
  },
  getRecodeList3(state) {
    changeUnit(state.recodeList3, 'cm')
    return state.recodeList3
  },
  getRecodeList3Last(state) {
    var len = state.recodeList3.length
    changeUnit(state.recodeList3, 'cm')
    return state.recodeList3.slice(len-1,len);
  },
  getRecodeList7(state) {
    return state.recodeList7
  },
  getRecodeList7Last(state) {
    var len = state.recodeList7.length
    return state.recodeList7.slice(len-1,len);
  },
  getRecodeListDiet(state) {
    return state.recodeListDiet
  },
  getRecodeListSugar(state) {
    return state.recodeListSugar
  },
  getRecodeListSugarLast(state) {
    var len = state.recodeListSugar.length
    return state.recodeListSugar.slice(len-1,len);
  }
}

function changeUnit(data, unit){
  data.map(function(obj){
   obj.value = obj.value + unit
  })
}

function changeUnit(data, unit){
  data.map(function(obj){
   obj.value = obj.value + unit
  })
}

const mutations = {
  getRecodeList1(state, payload){
   
    var len = payload.res.length;
    var dataList = []
    for(var i=0; i<len; i++){
      var obj = {};
      obj.time = payload.res[i]['skt138.skf2264'];
      obj.value = payload.res[i]['skt138.skf2265'];
      obj.evaluation = ''
      
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
    state.recodeList1 = dataList
  },
  getRecodeList2(state, payload){
   
    var len = payload.res.length;
    var dataList = []
    for(var i=0; i<len; i++){
      var obj = {};
      obj.time = payload.res[i]['skt138.skf2264'];
      obj.value = payload.res[i]['skt138.skf2265'];
      obj.evaluation = ''
      
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
    state.recodeList2 = dataList
  },
  getRecodeList4(state, payload){
   
    var len = payload.res.length;
    var dataList = []
    for(var i=0; i<len; i++){
      var obj = {};
      obj.time = payload.res[i]['skt138.skf2264'];
      obj.value = payload.res[i]['skt138.skf2265'];
      obj.evaluation = ''
      
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
    state.recodeList4 = dataList
  },
  getRecodeList3(state, payload){
   
    var len = payload.res.length;
    var dataList = []
    for(var i=0; i<len; i++){
      var obj = {};
      obj.time = payload.res[i]['skt138.skf2264'];
      obj.value = payload.res[i]['skt138.skf2795']+'/'+ payload.res[i]['skt138.skf2265'];
      obj.evaluation = ''
      
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
    state.recodeList3 = dataList
  },
  getRecodeList7(state, payload){
   
    var len = payload.res.length;
    var dataList = []
    for(var i=0; i<len; i++){
      var obj = {};
      obj.time = payload.res[i]['skt138.skf2264'];
      obj.movement = payload.res[i]['skt138.skf2274'];
      obj.water = payload.res[i]['skt138.skf2275'];
      obj.toilet = payload.res[i]['skt138.skf2276'];
      obj.calcium = payload.res[i]['skt138.skf2277'];
      obj.vitamin = payload.res[i]['skt138.skf2278'];
      obj.hunger = payload.res[i]['skt138.skf2279'];
      obj.feel = payload.res[i]['skt138.skf2280'];
      obj.evaluation = ''
      
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
    state.recodeList7 = dataList
  },
  getRecodeListDiet(state, payload){
    
    var dataList = []
    changeJson(payload.res).then(function(data){
      
      var len = data.length;
     
      for(var i=0; i<len; i++){
        var obj = {};
        obj.time = data[i]['time'];
        obj.evaluation = data[i]['evaluation'];
        obj['list'] = [];
        
        for(var j=0; j< data[i]['list'].length; j++){
          var obj2 = {};
          obj2.content = data[i]['list'][j]['skt138.skf2281']

          //早餐中餐晚餐夜宵 11 12 13 14
          switch(data[i]['list'][j]['skt138.skf2266']){
            case '11':
            obj2.sortType = '早餐';
            break;
            case '12':
            obj2.sortType = '午餐';
            break;
            case '13':
            obj2.sortType = '晚餐';
            break;
            case '14':
            obj2.sortType = '夜宵';
            break;
          }
          
          if(data[i]['list'][j]['skt138.skf2267']){
            obj2.imgs = [];
            var arr = data[i]['list'][j]['skt138.skf2267'].split(';');
            var len2 = arr.length-1
            for(var z=0; z<len2; z++){
              obj2.imgs.push(baseUrl.imgdownloadurl+arr[z]+'&filename='+arr[z]);
            }
          }else{
            obj2.imgs = '';
          }
          obj['list'].push(obj2)
        }
        dataList.push(obj)
      }
      state.recodeListDiet = dataList
    })
  },
  getRecodeListSugar(state, payload){
    
    var dataList = []
    changeJson(payload.res).then(function(data){
      
      var len = data.length;
     
      for(var i=0; i<len; i++){
        var obj = {};
        obj.time = data[i]['time'];
        //评价暂时用
        obj.evaluation = data[i]['evaluation'];
        obj['list'] = [];
        
        for(var j=0; j< data[i]['list'].length; j++){
          var obj2 = {};
          obj2.content = data[i]['list'][j]['skt138.skf2265']+'mmol/L';

          //1、2、3、4、5、11、12、13、14，分别表示空腹、早餐后2小时、午餐后2小时、晚餐后2小时、临睡前
          switch(data[i]['list'][j]['skt138.skf2266']){
            case '1':
            obj2.sortType = '空腹';
            break;
            case '2':
            obj2.sortType = '早餐后2小时';
            break;
            case '3':
            obj2.sortType = '午餐后2小时';
            break;
            case '4':
            obj2.sortType = '晚餐后2小时';
            break;
            case '5':
            obj2.sortType = '临睡前';
            break;
          }
          
          if(data[i]['list'][j]['skt138.skf2267']){
            obj2.imgs = [];
            var arr = data[i]['list'][j]['skt138.skf2267'].split(';');
            var len2 = arr.length-1
            for(var z=0; z<len2; z++){
              obj2.imgs.push(baseUrl.imgdownloadurl+arr[z]+'&filename='+arr[z]);
            }
          }else{
            obj2.imgs = '';
          }
          obj['list'].push(obj2)
        }
        dataList.push(obj)
      }
      state.recodeListSugar = dataList
    })
  }
}

//按时间重整数据结构
async function changeJson(arr){
  var obj = {}
  arr.forEach(function(item){
    if(obj[item['skt138.skf2264']]){   
      obj[item['skt138.skf2264']].push(item)

    }else{
      obj[item['skt138.skf2264']] = []
      obj[item['skt138.skf2264']].push(item)
    }
  })

  var arr2 = []
  for(var key in obj){
    var obj2 = {}
    obj2.time = key;

    await getEvaluation(key).then(function(data){
      if(data.length){
        obj2.evaluation = data[0]['skt155.skf2597']
      }else{
        obj2.evaluation = '暂无评价'
      }
    })
    
    obj2.list = obj[key]
    arr2.push(obj2)
  }
 
  return arr2;
}

function getEvaluation(date){
  let user = JSON.parse(localStorage.getItem('userInfoState'));
  return new Promise(function(resolve, reject){
    axios({
      methods: 'post',
      url: baseUrl.viewer+ '/Select_XuetangRecord.jsp',
      params: {
        ID: user.userInfoState.vipID,
        rq: date
      }
    })
    .then(function(res){
      resolve(res.data)
    })
  })

}

const actions = {
  //体重
  getRecodeList1({commit,rootState}, options){
    state.recodeList1 = [];
    axios({
      methods: 'post',
      url: baseUrl.viewer+ '/Select_WeightRecord.jsp',
      params: {
        ID: rootState.userInfo.info.vipId,
        lx: options
      }
    })
    .then(function(res){
      commit({
        type:'getRecodeList1',
        tag: 'getRecodeList1',
        res: res.data.data
      })
    })
  },
  //尿酮
  getRecodeList2({commit,rootState}, options){
    state.recodeList1 = [];
    axios({
      methods: 'post',
      url: baseUrl.viewer+ '/Select_WeightRecord.jsp',
      params: {
        ID: rootState.userInfo.info.vipId,
        lx: options
      }
    })
    .then(function(res){
      commit({
        type:'getRecodeList2',
        tag: 'getRecodeList2',
        res: res.data.data
      })
    })
  },
   //腰围
   getRecodeList4({commit,rootState}, options){
    state.recodeList1 = [];
    axios({
      methods: 'post',
      url: baseUrl.viewer+ '/Select_WeightRecord.jsp',
      params: {
        ID: rootState.userInfo.info.vipId,
        lx: options
      }
    })
    .then(function(res){
      commit({
        type:'getRecodeList4',
        tag: 'getRecodeList4',
        res: res.data.data
      })
    })
  },
  //血压
  getRecodeList3({commit,rootState}, options){
    state.recodeList3 = [];
    axios({
      methods: 'post',
      url: baseUrl.viewer+ '/Select3.jsp',
      params: {
        ID: rootState.userInfo.info.vipId,
        lx: options
      }
    })
    .then(function(res){
      commit({
        type:'getRecodeList3',
        tag: 'getRecodeList3',
        res: res.data.data
      })
    })
  },
  getRecodeList7({commit,rootState}, options){
    state.recodeList7 = [];
    axios({
      methods: 'post',
      url: baseUrl.viewer+ '/Select_SportRecord.jsp',
      params: {
        ID: rootState.userInfo.info.vipId,
        lx: options
      }
    })
    .then(function(res){
      commit({
        type:'getRecodeList7',
        tag: 'getRecodeList7',
        res: res.data.data
      })
    })
  },
  //饮食
  getRecodeListDiet({commit,rootState}, options){
    state.recodeListDiet = [];
    axios({
      methods: 'post',
      url: baseUrl.viewer+ '/Select_XuetangRecord.jsp',
      params: {
        ID: rootState.userInfo.info.vipId,
        lx: options
      }
    })
    .then(function(res){
      commit({
        type:'getRecodeListDiet',
        tag: 'getRecodeListDiet',
        res: res.data.data
      })
    })
  },
  //血糖
  getRecodeListSugar({commit,rootState}, options){
    state.recodeListSugar = [];
    axios({
      methods: 'post',
      url: baseUrl.viewer+ '/Select_XuetangRecord.jsp',
      params: {
        ID: rootState.userInfo.info.vipId,
        lx: options
      }
    })
    .then(function(res){
      commit({
        type:'getRecodeListSugar',
        tag: 'getRecodeListSugar',
        res: res.data.data
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