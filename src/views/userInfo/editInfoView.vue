<template>
    <div class="edit-info">
        <my-header :title="title" :left="true">
            <span slot="save" @click="submit">完成</span>
        </my-header>
        <div class="isheader">
          <ul class="edit-div">
              <li>
                  <input type="tel" v-model="data.tel"  placeholder="请输入新手机">
              </li>
              <li>
                  <mt-button type="danger" size="small" class="li-btn" @click="getCode(data)" :disabled="!isCode">
                      <span v-show="isCode">验证码</span>
                      <span v-show="!isCode">{{count}} s</span>
                  </mt-button>
                  <input type="tel" v-model="data.code"  placeholder="请输入验证码">
              </li>
          </ul>
          <p  class="errorTip" v-show="isShow">请输入{{error}}</p>
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
           type: '',
           title: '更新手机号',
           error: '',
           flag: true,
           message: '',
           isShow: false,
           data: {
              tel: '',
              code: ''
           },
           isCode: true,
           count: '',
           timer: null
       }
    },
    created() {
        this.type = this.$route.query.type;
    },
    methods: {
        getValue(e) {
          this.message = e;
        },
        checkTel() {
            return /^1[3|4|5|7|8][0-9]{9}$/.test(this.data.tel);
        },
        checkNullVal() {
            return this.data.code=='';
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
                if(this.data.tel==''){
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
        submit() {
            
            var code = this.checkNullVal();
            var tel = this.checkTel();
            
            if(!tel){
                if(this.data.tel==''){
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
            }else if(code){
                Toast({
                    message: '请输入验证码',
                    position: 'center',
                    duration: 2500
                });
            }else{
              var self = this;
              this.$store.dispatch('updatePhone', {phone:self.data.tel}).then(function(data){
                
                Toast({
                    message: data,
                    position: 'center',
                    duration: 2500
                });
                self.$router.push({name: 'userInfoView'})
              })
            }
        },
    },
    components: {MyHeader}
}
</script>

<style lang="scss" scoped>
.edit-info{
    height: 100%;
    background: #f8f8f8;
}
.edit-div{
    width: 100%;
    background: #fff;
    margin-top: 0.2rem;
    border-bottom: 1px solid #dedede;
    border-top: 1px solid #dedede;
    font-size: 0.26rem;
    li{
        padding: 1px 0rem 1px 0.2rem;
        display: flex;
        height: 0.68rem;
        position: relative;
        input[type=tel]{
            padding: 0.16rem 0;
            height: 0.66rem;
            box-sizing: border-box;
            width: 100%;
            font-size: 0.26rem;
        }
        .li-btn{
            margin-top: 0.1rem; 
            position: absolute;
            right: 0.2rem;
            height: 0.5rem !important;
            min-width: 1rem;
        }
    }
    li+li input{
        border-top: 1px solid #dedede;
    }
}
.errorTip{
    padding: 0.1rem 0.2rem;
    color: #F47340;
    font-size: 0.24rem;
}
</style>
