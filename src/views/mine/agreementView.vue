<template>
    <div class="agreement-view isheader">
        <my-header :left="true" :title="title"></my-header>
        <h2>协议与说明</h2>
        <p>{{content}}</p>
        <mt-button type="primary"  class="bottom-btn middle-large" v-bind:disabled="(state==0)?true:false" @click="changeState">我同意</mt-button>
        <!-- type="info" disabled -->
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import { Toast } from 'mint-ui';

export default {
    data() {
      return {
          userInfoState: JSON.parse(localStorage.getItem('userInfoState')).userInfoState,
          title: '协议与说明',
          content: '',
          state: 0,
      }
    },
    created(){
      this.getState();
      this.getContent();
    },
    methods: {
      getContent() {
        var self = this;
        this.$axios({
          methods: 'post',
          url: self.baseurl.viewer+'/select_protocol.jsp',
          params: {
            token: ''
          }
        })
        .then(function(res){
          console.log(res);
          self.content = res.data.data[0]['skt124.skf1942'];
        })
      },
      getState() {
        var self = this;
        this.$axios({
          methods: 'post',
          url: self.baseurl.viewer+'/select_protocolstatue.jsp',
          params: {
            token: '',
            'SKT123.SKF1934': self.userInfoState.tel,
          }
        })
        .then(function(res){
          if(res.data.data[0]['count(skt123.skf1935)']==0){
            self.state = 0;
          }else{
            self.state = 1;
          }
        })
      },
      changeState() {
        var self = this;
        if(self.state==0){
          this.$axios({
            methods: 'post',
            url: '/insert_protocolconfirm.jsp',
            params: {
              token: '',
              'SKT123.SKF1934': localStorage.getItem('userInfoState').tel,
              // 'skt123.skf1935': '1',
              'skt123.skf1940': localStorage.getItem('userInfoState').vipID,
              // 'skt123.skf1948': 1
            }
          })
          .then(function(res){
            console.log(res)
            if(res.data.code==0){
              self.state = 1;
            }
          })
        }else{
          return
        }
      }
    },
    components: { MyHeader }

}
</script>

<style lang="scss" scoped>
.agreement-view{
    position: relative;
    height: 100%;
    box-sizing: border-box;
     h2{
         font-size: 0.36rem;
         font-weight: 400;
         text-align: center;
         line-height: 1.2rem;
     }
     p{
         margin: 0.2rem;
         text-align: justify;
     }
     
}
</style>
