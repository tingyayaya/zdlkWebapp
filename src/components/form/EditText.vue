<template>
    <div class="isheader">
        <my-header :title="title" :left="true">
            <span slot="save" @click="submit">完成</span>
        </my-header>
        <ul class="edit-div">
            <li>
                <slot name="unit"></slot>
                <input type="text" v-model="message" v-on:input = "getValue" :placeholder="'请输入'+title">
            </li>
        </ul>
        <p slot="error" class="errorTip" v-show="isShow">请输入{{title}}</p>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import { Toast } from 'mint-ui';

export default {
    name: 'edit-text',
    components: { MyHeader },
    data() {
        return {
            title: '',
            flag: true,
            message: '',
            isShow: false
        }
    },
    methods: {
        getValue(){
            
        },
        submit() {
            console.log(this.message)
            var val  = this.checkNull();
            if(val){
                Toast({
                    message: '请输入'+this.title,
                    position: 'center',
                    duration: 2500
                });
            }else{
                this.$emit('inputV', this.message)
            }
        },
        checkNull() {
            return this.message =='';
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
        input[type=text]{
            padding: 16px 0;
            height: 66px;
            box-sizing: border-box;
            width: 100%;
            font-size: 28px;
        }
    }
}
.errorTip{
    padding: 10px 20px;
    color: #F47340;
    font-size: 24px;
}
 
</style>
