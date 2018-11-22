<template>
    <div class="page-view isheader isfooter backgroundd">
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>

import MyFooter from '../components/MyFooter';
import UserState from '@/assets/js/login';
import { MessageBox } from 'mint-ui';
import { setTimeout } from 'timers';

export default {
   name: 'page-view',
   components: { MyFooter },
   mounted(){
   
      var pass = UserState.userState();
      if(!pass){
        var timer = setTimeout(() => {
           MessageBox.alert('登录过期， 请重新登录').then(action => {
            this.$router.push({name: 'loginView'})
          });
        }, 1000);
         
      }else if(pass=='3'){   //直接跳转
          this.$router.push({name: 'loginView'})
      }
   
   }
}
</script>

<style>
   .page-view{
       height: 100%;
       box-sizing: border-box;
   }
</style>
