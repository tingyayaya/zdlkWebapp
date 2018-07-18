<template>
    <div class="isheader">
        <my-header :title="title" :left="true">
            <span slot="save" @click="submit">完成</span>
        </my-header>
        <ul class="edit-div">
            <li>
                <input type="number" v-model="message"  placeholder="请输入身份证">
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
    name: 'edit-codeid',
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
            this.$emit('inputV', this.data);
            var codeId = this.checkTel();
            if(!codeId){
                if(this.message==''){
                    Toast({
                        message: '请输入身份证',
                        position: 'center',
                        duration: 2500
                    });
                }else{
                     Toast({
                        message: '您输入的身份证不正确',
                        position: 'center',
                        duration: 2500
                    });
                }
            }
        },
        checkTel() {
            var string =  /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
            return string.test(this.message);
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

