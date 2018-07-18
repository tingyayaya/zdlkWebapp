<template>
    <div>
        <my-header :left="false" title="登录"></my-header>
        <div class="isheader">
            <i class="icon-z icon-z-logo"></i>
            <ul class="input-list-icon">
                <li>
                    <i class="icon-z icon-z-tel"></i>
                    <input type="tel" placeholder="请输入手机号" v-model="form.tel">
                </li>
                <li>
                    <i class="icon-z icon-z-pass"></i>
                    <input type="password" placeholder="请输入登录密码（6-20位字符）" v-model="form.pass">
                </li>
                <mt-button type="primary" class="btn-large" @click="login">登录</mt-button>
                <div class="more-link">
                    <router-link :to="{name: 'registView'}"> <span>没有账号？去注册</span> </router-link>
                    <router-link :to="{name: 'passwordView'}"><span>找回密码</span></router-link>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
           token: this.MYTOKEN,
           form: {
                tel: '',
                pass: ''
           }
        }
    },
    components: { MyHeader },
    methods: {
        login(){
            var self = this;
            var tel = this.checkTel();
            var pass = this.checkPass();
            if(!tel){
                if(this.form.tel==''){  //账号为空
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
            }else if(!pass){     //密码为空
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
            }else{     //都不为空
                this.$axios({
                  method: 'get',
                  url: '/select_login.jsp',
                  params: {
                    'token' : self.MYTOKEN,
                    'SKT122.SKF1926' : self.form.tel,
                    'SKT122.SKF1925' : self.form.pass
                  }
                })
                .then(function(res){
                  console.log(res);
                  if(res.data.code==0&&res.data.data.length!=0){   //登录成功
                    sessionStorage.tel = res.data.data[0]['skt122.skf1926'];    //会员手机号
                    sessionStorage.vipID = res.data.data[0]['skt122.skf1947'];   //会员ID

                    Toast({
                        message: '登录成功,将跳转',
                        position: 'center',
                        duration: 1000,
                        iconClass: 'icon-z-loading'
                    });
                    
                    var timer = setTimeout(function(){
                        self.$router.push({name: 'homeView'})
                    },1000)

                  }else if(res.data.code==0&&res.data.data.length==0){    //账号密码或错误
                    Toast({
                        message: '密码或手机号错误',
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
            }
            
        },
        checkTel(){
            return /^1[3|4|5|7|8][0-9]{9}$/.test(this.form.tel);
        },
        checkPass(){
            return /^[A-Za-z0-9]{6,20}$/.test(this.form.pass)
        }
    }
}
</script>

<style lang="scss" scoped>
.icon-z-logo{
    display: block;
    margin: 50px auto;
}
.input-list-icon{
    padding: 20px;
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
    }
    .more-link{
        width: 100%;
        font-size: 24px;
        a:nth-child(1){
            float: left;
        }
        a:nth-child(2){
            float: right;
        }
    }
}

</style>
