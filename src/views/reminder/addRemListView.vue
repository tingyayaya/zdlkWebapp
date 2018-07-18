<template>
    <div class="addrem-view">
        <my-header :left="true" :title="title"></my-header>
        <div class="addrem-list">
            <div>
                <span class="label">已选日期</span>
                <span class="text">{{list.date}}</span>
            </div>
            <input type="text" placeholder="请输入标题" v-model="list.title">
            <input type="text" placeholder="请输入事件内容" v-model="list.desc">
            <div @click="openPicker">
                <span v-show="list.remindTime==''">请选择提醒事件</span>
                <span class="label">{{list.remindTime}}</span>
            </div>
            <mt-button size="large" type="primary" class="btn-large margin-top-20" @click="add">完成</mt-button>
        </div>
        <mt-datetime-picker
            ref="picker"
            type="time"
            v-model="pickerValue"
            @confirm="handleConfirm">
        </mt-datetime-picker>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import { Toast } from 'mint-ui';

export default {
    data() {
       return {
           pickerValue: '12:00',
           title: '添加日程提醒',
           list: {
               date: sessionStorage.date,
               title: '',
               desc: '',
               remindTime: ''
           }
       }
    },
    methods: {
        add(){
            var self = this;
            if(this.list.title==''){
                Toast({
                    message: '请填写标题',
                    position: 'center',
                    duration: 2500
                });
            }else{
                Toast({
                    message: '添加成功，将跳转',
                    position: 'center',
                    duration: 1500,
                    iconClass: 'icon-z-loading'
                });
                var timer = setTimeout(function(){
                   self.$router.push({name: 'reminderView'});
                },1500)
            }
        },
        handleConfirm(){
            this.list.remindTime = this.pickerValue;
            console.log(this.list.remindTime)
        },
        openPicker() {
           this.$refs.picker.open(); 
        }
    },
    components: { MyHeader }
}
</script>

<style lang="scss">
.addrem-view{
    background: #f8f8f8;
}
.addrem-list{
    padding-top: 108px;
    input, div{
       height: 64px;
       width: 100%;
       padding: 0 20px;
       box-sizing: border-box;
       border-top: 1px solid #dedede;
       border-bottom: 1px solid #dedede;
       background: #fff;
       margin-bottom: 20px;
    }
    input::-webkit-input-placeholder{
        font-size: 26px;
        color: #888888;
    }
    div{
        font-size: 26px;
        color: #888888;
        line-height: 60px;
        .label{
            color: #000000;
        }
        .text{
            float: right;
        }
    }
}
</style>
