<template>
    <div class="all-record-view">
        <my-header :left="true" :title="title"></my-header>
        <div class="content formBox">
            <div class="input-danwei">
                <span>kg</span>
                <input type="number" placeholder="请输入体重" class="input-text" v-model="form.weight">
            </div>
            <div class="select" @click="openPicker"><span v-show="!form.date">请选择日期</span><span>{{form.date}}</span></div>
            <!-- <textarea name="" id="" placeholder="晒饮食，晒心情"></textarea> -->
            <div class="picker-pic">
                <div class="pic-box" :style="{backgroundImage: 'url('+item+')'}" v-for="(item,index) in form.imgs" >
                    <div class="delete" @click="delete2(index)"><i class="icon-z icon-z-arrow-delete"></i></div>
                </div>
                <div class="add-box" v-show="dispearla">
                    <input type="file" @change="getImages" class="files" ref="feedbakcImg">
                    <i class="icon iconfont icon-add-img"></i>
                </div>
            </div>
            <mt-button type="primary"  class="bottom-btn2 middle-large" @click="submitForm">确认</mt-button>
        </div>
        <mt-datetime-picker
            ref="picker"
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            v-model="pickerValue"
            :startDate="startDate"
            :endDate="endDate"
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
            startDate: new Date('2012'),
            endDate: new Date('2032-12-31'),
            pickerValue: '2012-01-01',
            isDelete: false,
            dispearla: true,
            title: '记录体重',
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
                weight: '',
                date: ''
            }
        }
    },
    created(){
      
    },
    methods: {
        getData() {
          var self = this;
          this.$axios({
            method: 'get',
            url: self.baseurl.viewer+'/Weight_Record.jsp',
            params: {
              'skt138.skf2265': self.form.weight,
              'skt138.skf2264': self.form.date,
              'skt138.skf2267': self.form.imgs,
              'skt138.skf2262': sessionStorage.vipID,
              'skt138.skf2263': 1
            }
          })
          .then(function(res){
            if(res.data.code!=0){
              Toast({
                  message: '记录失败，请重试',
                  position: 'center',
                  duration: 1000
              });
              
              var timer = setTimeout(function(){
                  self.$router.push({name: 'recordView'})
              },1000)
            }else{
              Toast({
                  message: '记录成功',
                  position: 'center',
                  duration: 1000
              });
              var timer = setTimeout(function(){
                 self.$router.push({name: 'recordView'})
              },1000)
            }
          })
        },
        openPicker() {
           this.$refs.picker.open(); 
        },
        handleConfirm(){ 
            this.form.date = this.DateGMT(this.pickerValue);
        },
        DateGMT(time){
            var str = new Date(time);
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
        getSelectValue(e){
            if(e[1]!=null){
                this.currentTages = e[1];
            }
            this.popupVisible = e[0];
        },
        getImages(e){
            var self = this;
            var file = e.target.files;
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
        delete2(num){
            this.form.imgs.splice(num, 1);
        },
        validateimg(){
            if(this.form.weight==0){
                Toast({
                    message: '请输入体重',
                    position: 'center',
                    duration: 2500
                });
                return false;
            }else{
                return true;
            }
        },
        validateDate(){
           if(this.form.date==''){
                Toast({
                    message: '请选择日期',
                    position: 'center',
                    duration: 2500
                });
           }
        },
        submitForm(){
            this.validateimg();
            this.validateDate();
            this.getData();
        }
    },
    components: { MyHeader }
}
</script>

<style lang="scss" scoped>

$border1: 1px solid #dedede;

.all-record-view{
    height: 100%;
    .content{
        height: 100%;
        box-sizing: border-box;
        padding: 1.08rem 0.2rem 0.2rem 0.2rem;
        position: relative;
        .input-danwei{
            position: relative;
            span{
                position: absolute;
                right: 0.2rem;
                top: 0.1rem;
            }
        }
        .input-text{
            width: 100%;
            height: 0.68rem;
            border: $border1;
            padding: 0.2rem;
            box-sizing: border-box;
            margin-bottom: 0.2rem;
        }
        .select{
            width: 100%;
            height: 0.68rem;
            border: 1px solid #dedede;
            line-height: 0.68rem;
            padding: 0 0.2rem;
            box-sizing: border-box;
            border-radius: 0.02rem;
            margin-bottom: 0.2rem;
        }
        textarea{
            width: 100%;
            height: 2.6rem;
            padding: 0.2rem;
            border: 1px solid #dedede;
            border-radius: 0.02rem;
            box-sizing: border-box;
        }
        .picker-pic{
            padding:0.2rem 0;
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            .pic-box{
                background-position: center center;
                background-size: cover;
                background-repeat: no-repeat;
                border: $border1;
                width: 1.34rem;
                height: 1.34rem;
                margin-bottom: 0.2rem;
                margin-right: 0.16rem;
                position: relative;
                .delete{
                    position: absolute;
                    top: 1px;
                    right: 1px;
                    width: 0.4rem;
                    height: 0.4rem;
                }
            }
            .pic-box:nth-child(4),.pic-box:nth-child(8){
                margin-right: 0;
            }
            .add-box{
                width: 1.34rem;
                height: 1.34rem;
                border: 1px solid #dedede;
                position: relative;
                .icon-add-img{
                    z-index: 2;
                    color: #D8D8D8;
                    font-size: 0.8rem;
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
                    width: 1.34rem;
                    height: 1.34rem;
                }
            }
        }
    }
    .formBox{
        font-size: 0.3rem;
    }
}


</style>
