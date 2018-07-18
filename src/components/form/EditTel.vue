<template>
    <div class="isheader">
        <my-header :title="title" :left="true">
            <span slot="save" @click="submit">完成</span>
        </my-header>
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
</template>

<script>
import MyHeader from '@/components/MyHeader'
import { Toast } from 'mint-ui';

const TIME_COUNT = 60;

export default {
    name: 'edit-tel',
    components: { MyHeader },
    data() {
        return {
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
    methods: {
        submit() {
            console.log(this.data)
            
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
                this.$emit('inputV', this.data);
            }
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
        checkTel() {
            return /^1[3|4|5|7|8][0-9]{9}$/.test(this.data.tel);
        },
        checkNullVal() {
            return this.data.code=='';
        }
    },
    created() {
        this.title = this.$route.query.title;
        this.message = this.$route.query.content;
    }
}
</script>

<style lang="scss" scoped>

.edit-div{
    width: 100%;
    background: #fff;
    margin-top: 20px;
    border-bottom: 1px solid #dedede;
    border-top: 1px solid #dedede;
    font-size: 28px;
    li{
        padding: 1px 0px 1px 20px;
        display: flex;
        height: 68px;
        position: relative;
        input[type=tel]{
            padding: 16px 0;
            height: 66px;
            box-sizing: border-box;
            width: 100%;
            font-size: 28px;
        }
        .li-btn{
            margin-top: 10px; 
            position: absolute;
            right: 20px;
            height: 50px !important;
            min-width: 100px;
        }
    }
    li+li input{
        border-top: 1px solid #dedede;
    }
}
.errorTip{
    padding: 10px 20px;
    color: #F47340;
    font-size: 24px;
}
 
</style>
