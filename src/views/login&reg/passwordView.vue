<template>
    <div>
        <my-header :left="false" title="重置密码"></my-header>
        <div class="isheader">
            <ul class="input-list-icon">
                <li>
                    <i class="icon-z icon-z-tel"></i>
                    <input type="tel" placeholder="请输入手机号" v-model="form.tel">
                </li>
                <li>
                    <mt-button type="danger" size="small" class="li-btn" @click="getCode()" :disabled="!isCode">
                        <span v-show="isCode">验证码</span>
                        <span v-show="!isCode">{{count}} s</span>
                    </mt-button>
                    <i class="icon-z icon-z-telCode"></i>
                    <input type="number" placeholder="请输入验证码" v-model="form.telCode">
                </li>
                <li>
                    <i class="icon-z icon-z-pass"></i>
                    <input type="password" placeholder="请输入新密码（6-20位字符）" v-model="form.pass">
                </li>
                <mt-button type="primary" class="btn-large" @click="login">确认</mt-button>
                <div class="more-link">
                    <router-link :to="{name: 'loginView'}"> <span>已有账号，去登录</span> </router-link>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';

const TIME_COUNT = 60;

export default {
    data() {
        return {
           form: {
                tel: '',
                pass: '',
                telCode: ''
           },
           isCode: true,
           count: '',
           timer: null,
        }
    },
    components: { MyHeader },
    methods: {
        login(){
            var tel = this.checkTel();
            var pass = this.checkPass();
            var telCode = this.checkTelCode();
            if(!tel){
               if(this.form.tel==''){
                    Toast({
                        message: '请输入手机号',
                        position: 'center',
                        duration: 2500
                    });
                }else{
                    Toast({
                        message: '您输入的手机号不正确',
                        position: 'center',
                        duration: 2500
                    });
                }
            }else if(!pass){
                if(this.form.pass==''){
                     Toast({
                        message: '请输入新密码',
                        position: 'center',
                        duration: 2500
                    });
                }else{
                     Toast({
                        message: '请输入6-20位字符的密码',
                        position: 'center',
                        duration: 2500
                    });
                }
            }else if(!telCode){
                Toast({
                    message: '请输入验证码',
                    position: 'center',
                    duration: 2500
                });
            }else{
                this.updatePassHttp();
            }
        },
        updatePassHttp (){
          var self = this;
          this.$axios({
            method: 'get',
            url: '/update_pwd.jsp',
            params: {
              'token' : self.MYTOKEN,
              'skt122.skf1926' : self.form.tel,
              'skt122.skf1925' : self.form.pass
            }
          })
          .then(function(res){
            console.log(res);
            if(res.data.code==0&&res.data.msg=="成功"){   //登录成功
              
              MessageBox.alert('密码重置成功!去登录').then(action => {
                     self.$router.push({name: 'loginView'})
              });

            }else if(res.data.code==1){    //账号密码或错误
              Toast({
                  message: '失败，该手机号不存在',
                  position: 'center',
                  duration: 2500,
              });

            }else if(res.data.code==5){      //token无效
              Toast({
                  message: res.data.msg,
                  position: 'center',
                  duration: 2500,
              });

            }else if(res.data.code==8){     //数据库异常
              Toast({
                  message: '数据库异常',
                  position: 'center',
                  duration: 2500,
              });
            }
          })
        },
        checkTel(){
            return /^1[3|4|5|7|8][0-9]{9}$/.test(this.form.tel);
        },
        checkPass(){
            return /^[A-Za-z0-9]{6,20}$/.test(this.form.pass)
        },
        checkTelCode(){
            return this.form.telCode!='';
        },
        getCode() {
            var tel = this.checkTel();
            if(tel && !this.timer) {
                Toast({
                    message: '发送成功',
                    position: 'center',
                    duration: 2500
                });
                this.count = TIME_COUNT;
                this.isCode = false;
                this.timer = setInterval(() => {
                  if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                  } else {
                    this.isCode = true;
                    clearInterval(this.timer);
                    this.timer = null;
                  }
                }, 1000)
            }else{
                if(this.form.tel==''){
                    Toast({
                        message: '请输入手机号',
                        position: 'center',
                        duration: 2500
                    });
                }else{
                    Toast({
                        message: '您输入的手机号不正确',
                        position: 'center',
                        duration: 2500
                    });
                }
            }
            
        },
    }
}
</script>

<style lang="scss" scoped>
.icon-z-logo{
    display: block;
    margin: 50px auto;
}
.input-list-icon{
    padding: 40px 20px 20px 20px;
    li{
        width: 100%;
        height: 78px;
        margin-bottom: 30px;
        position: relative;
        i{
            position: absolute;
            top: 18px;
            left: 20px;
        }
        input{
            width: 100%;
            height: 78px;
            background-color:#f2f2f2;
            color: #000;
            border-radius: 6px;
            padding:20px 20px 20px 80px;
            box-sizing: border-box;
        }
        input::-webkit-input-placeholder{
            color: #b6b6b6;
        }
        .li-btn{
            margin-top: 14px; 
            position: absolute;
            right: 20px;
            height: 50px !important;
            min-width: 100px;
        }
    }
    .more-link{
        width: 100%;
        font-size: 24px;
        text-align: center;
    }
}

</style>
