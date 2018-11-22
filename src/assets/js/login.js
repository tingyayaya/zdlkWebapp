let userState = function(){
  
  var userInfoState = JSON.parse(localStorage.getItem('userInfoState'));
  
  // 不含有用户登录数据，判断 localStorage 中的数据是否可以使用
  var pass = userInfoState && userInfoState.timestamp && new Date().getTime()-userInfoState.timestamp<=7*24*60*60*1000;
  // var url = window.location.href.replace(window.location.hash, '')
  
  if(userInfoState == null){
    //请登录
    pass = '3'
  }
  return pass;
}
export default { userState }