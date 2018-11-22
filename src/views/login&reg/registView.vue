<template>
    <div>
        <my-header :left="false" title="注册"></my-header>
        <div class="isheader">
            <!-- 第一步 -->
            <p class="step">{{step}}</p>
            <ul class="input-list-icon" v-show="step1Show">
                <li>
                    <i class="icon-z icon-z-user"></i>
                    <input type="text" placeholder="请输入姓名" v-model="form.name">
                </li>
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
                    <input type="password" placeholder="请输入登录密码（6-20位字符）" v-model="form.pass">
                </li>
                <mt-button type="primary" class="btn-large" @click="next1">下一步</mt-button>
                <div class="more-link">
                    <router-link :to="{name: 'loginView'}"> <span>已有账号，去登陆</span> </router-link>
                </div>
            </ul>
            <!-- 第二步 -->
            <ul class="input-list-icon" v-show="step2Show">
                <li>
                    <i class="icon-z icon-z-height"></i>
                    <span class="unit">cm</span>
                    <input type="number" placeholder="请输入身高" v-model="form.height">
                </li>
                <li>
                    <i class="icon-z icon-z-weight"></i>
                    <span class="unit">kg</span>
                    <input type="number" placeholder="请输入体重" v-model="form.weight">
                </li>
                <mt-button type="primary" class="btn-large" @click="next2">下一步</mt-button>
                <div class="more-link">
                    <router-link :to="{name: 'loginView'}"> <span>已有账号，去登陆</span> </router-link>
                </div>
            </ul>
            <div class="input-list-icon" v-show="step3Show">
                <i class="icon-z icon-z-success margin"></i>
                <mt-button type="primary" class="btn-large" @click="next3">注册成功，去登陆</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import { Toast } from 'mint-ui';

const TIME_COUNT = 60;
export default {
    data() {
        return {
            form: {
                tel: '',
                pass: '',
                telCode: '',
                name: '',
                weight: '',
                height: ''
            },
            step1Show: true,
            step2Show: false,
            step3Show: false,
            isCode: true,
            count: '',
            timer: null,
            step: '第一步：手机号验证'
        }
    },
    components: { MyHeader },
    methods: {
        next1(){
            var tel = this.checkTel();
            var pass = this.checkPass();
            var name = this.checkName();
            var telCode = this.checkCode();

            if(!name){
                Toast({
                    message: '请输入姓名',
                    position: 'center',
                    duration: 2500
                });
            }else if(!tel){
                Toast({
                    message: '请输入手机号',
                    position: 'center',
                    duration: 2500
                });
            }else if(!pass){
                if(this.form.pass==''){
                     Toast({
                        message: '请输入密码',
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
                this.step1Show = false;
                this.step2Show = true;
                this.step = "第二步：请填写个人资料"
            }
        },
        next2() {
            var height = this.checkHeight();
            var weight = this.checkWeight();
            if(!height){
                Toast({
                    message: '请输入身高',
                    position: 'center',
                    duration: 2500
                });
            }else if(!weight){
                Toast({
                    message: '请输入体重',
                    position: 'center',
                    duration: 2500
                });
            }else{
                this.addRegHttp();
            }
        },
        next3(){
          this.$router.push({name: 'loginView'})  
        },
        addRegHttp(){
          var self = this;
          this.$axios({
            method: 'get',
            url: self.baseurl.viewer+'/add_reg.jsp',
            params: {
              'skt122.skf1924': self.form.name,
              'skt122.skf1925': self.form.pass,
              'skt122.skf1927': self.form.height,
              'skt122.skf1928': self.form.weight,
              'skt122.skf1926': self.form.tel,
              'token' : ''
            }
          })
          .then(function(res){
            console.log(res);
            if(res.data.code==0){
              console.log('注册成功啊')
              self.step2Show = false;
              self.step3Show = true;
              self.step = "第三步：完成";
            }else if(res.data.code==5){
              Toast({
                  message: res.data.msg,
                  position: 'center',
                  duration: 2500
              });
            }else if(res.data.code==5){
              Toast({
                  message: '该手机已被注册',
                  position: 'center',
                  duration: 2500
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
        checkCode(){
            return this.form.telCode!='';
        },
        checkName(){
            return this.form.name!='';
        },
        checkHeight() {
            return this.form.height!='';
        },
        checkWeight() {
            return this.form.weight!='';
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
    margin: 0.5rem auto;
}
.icon-z-success{
     display: block;
    margin: 0.5rem auto;
}
.step{
    padding: 0.4rem 0.2rem 0.2rem 0.2rem;
    color: #C5D01A;
    font-size: 0.24rem;
}
.input-list-icon{
    padding: 0.2rem;
    li{
        width: 100%;
        height: 0.78rem;
        margin-bottom: 0.3rem;
        position: relative;
        i{
            position: absolute;
            top: 0.18rem;
            left: 0.2rem;
        }
        .unit{
            position: absolute;
            top: 0.18rem;
            right: 0.2rem;
        }
        input{
            width: 100%;
            height: 0.78rem;
            background-color:#f2f2f2;
            color: #000;
            border-radius: 0.06rem;
            padding:0.2rem 0.2rem 0.2rem 0.8rem;
            box-sizing: border-box;
        }
        input::-webkit-input-placeholder{
            color: #b6b6b6;
        }
        .li-btn{
            margin-top: 0.14rem; 
            position: absolute;
            right: 0.2rem;
            height: 0.5rem !important;
            min-width: 1rem;
        }
    }
    .more-link{
        width: 100%;
        font-size: 0.24rem;
        text-align: center;
    }
}

</style>
