<template>
    <div class="all-record-view">
        <my-header :left="true" :title="title"></my-header>
        <div class="content formBox">
            <div class="select" @click="getpickn"><span v-show="!currentTages">请选择分类</span><span>{{currentTages.name}}</span></div>
            <input type="text" placeholder="运动量" class="input-text">
            <input type="text" placeholder="饮水量" class="input-text">
            <input type="text" placeholder="大便次数" class="input-text">
            <input type="text" placeholder="钙片服用量" class="input-text">
            <input type="text" placeholder="维生素服用量" class="input-text">
            <input type="text" placeholder="饥饿感" class="input-text">
            <input type="text" placeholder="自我感觉" class="input-text">
            <textarea name="" id="" placeholder="晒饮食，晒心情"></textarea>
            <div class="picker-pic">
                <div class="pic-box" :style="{backgroundImage: 'url('+item+')'}" v-for="(item,index) in form.imgs" >
                    <div class="delete" @click="delete2(index)"><i class="icon-z icon-z-arrow-delete"></i></div>
                </div>
                <div class="add-box" v-show="dispearla">
                    <input type="file" @change="getImages" class="files" ref="feedbakcImg">
                    <i class="icon iconfont icon-add-img"></i>
                </div>
            </div>
             <mt-button type="primary"  class="bottom-btn middle-large" @click="submitForm">确认</mt-button>
        </div>
       
        <my-picker :slots="slots44" :show="popupVisible" @selectValue="getSelectValue($event)"></my-picker>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyPicker from '@/components/MyPicker'
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            isDelete: false,
            dispearla: true,
            title: '记录饮食',
            currentTages: '',
            defaultShow:true, 
            popupVisible: false,
            slots44: [{
                flex: 1,
                values: [
                    {
                        id:'1',
                        name: '早餐'
                    },{
                        id:'2',
                        name: '午餐'
                    },{
                        id:'3',
                        name: '晚餐'
                    }
                ],
                className: 'slot1',
                textAlign: 'center'
            }],
            form:{
                imgs: [],
                date: ''
            }
        }
    },
    methods: {
        getpickn(){
            console.log(1);
            this.popupVisible = true;
        },
        getSelectValue(e){
            if(e[1]!=null){
                this.currentTages = e[1];
            }
            this.popupVisible = e[0];
        },
        getImages(e){
            var self = this;
            var file = e.target.files[0];
            var reader = new FileReader();
            this.$refs.feedbakcImg.value ='';
            reader.readAsDataURL(file);
            reader.onload = function(){
                var base64 = reader.result;
                self.form.imgs.push(base64);
                if(self.form.imgs.length>=8){
                    self.dispearla = false;
                }
            }
        },
        getDate(){
            var str = new Date();
            var year, month, day, currentDate;
            year = str.getFullYear();
            month = str.getMonth()+1;
            day = str.getDate()
            currentDate = year+"-";
            
            if(month>=10){
                currentDate+= month+"-";
            }else{
                currentDate+= "0"+month+"-";
            }
            
            if(day>=10){
                currentDate += day
            }else{
                currentDate+= "0"+day;
            }
            return currentDate;
        },
        delete2(num){
            this.form.imgs.splice(num, 1);
        },
        validateimg(){
            if(this.currentTages==''){
                Toast({
                    message: '请选择分类',
                    position: 'center',
                    duration: 2500
                });
                return false;
            }else{
                return true;
            }
        },
        submitForm(){
            this.validateimg();
            this.form.date = this.getDate();
        }
    },
    components: { MyHeader, MyPicker }
}
</script>

<style lang="scss" scoped>

$border1: 1px solid #dedede;

.all-record-view{
    .content{
        height: 100%;
        box-sizing: border-box;
        padding: 108px 20px 20px 20px;
        position: relative;
        .input-text{
            width: 100%;
            height: 68px;
            border: $border1;
            padding: 20px;
            box-sizing: border-box;
            margin-bottom: 20px;
        }
        .select{
            width: 100%;
            height: 68px;
            border: 1px solid #dedede;
            line-height: 68px;
            padding: 0 20px;
            box-sizing: border-box;
            border-radius: 2px;
            margin-bottom: 20px;
        }
        textarea{
            width: 100%;
            height: 260px;
            padding: 20px;
            border: 1px solid #dedede;
            border-radius: 2px;
            box-sizing: border-box;
        }
        .picker-pic{
            padding:20px 0;
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            .pic-box{
                background-position: center center;
                background-size: cover;
                background-repeat: no-repeat;
                border: $border1;
                width: 134px;
                height: 134px;
                margin-bottom: 20px;
                margin-right: 16px;
                position: relative;
                .delete{
                    position: absolute;
                    top: 1px;
                    right: 1px;
                    width: 40px;
                    height: 40px;
                }
            }
            .pic-box:nth-child(4),.pic-box:nth-child(8){
                margin-right: 0;
            }
            .add-box{
                width: 134px;
                height: 134px;
                border: 1px solid #dedede;
                position: relative;
                .icon-add-img{
                    z-index: 2;
                    color: #D8D8D8;
                    font-size: 80px;
                    position: absolute;
                    top:50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                .files{
                    z-index: 3;
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 0;
                    filter: alpha(opacity=0);
                    width: 134px;
                    height: 134px;
                }
            }
        }
    }
    .formBox{
        font-size: 30px;
    }
}


</style>
