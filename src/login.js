let userState = function(){
  if(!sessionStorage.tel){
    window.location.href = 'http://'+window.location.host +'/#/loginView'
  }
  return;
}
export { userState }