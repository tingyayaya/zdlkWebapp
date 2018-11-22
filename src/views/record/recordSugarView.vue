<template>
    <div class="all-record-view">
        <my-header :left="true" :title="title"></my-header>
        <div class="content formBox">
            <div class="input-danwei">
                <span>mmol/L</span>
                <input type="number" placeholder="请输入血糖值" class="input-text" v-model="form.sugar">
            </div>
            <div class="select" @click="openPicker"><span v-show="!currentTages2">请选择日期</span><span>{{currentTages2.name}}</span></div>
            <div class="select" @click="getpickn"><span v-show="!currentTages">请选择分类</span><span>{{currentTages.name}}</span></div>
            <!-- <textarea name="" id="" placeholder="晒饮食，晒心情"></textarea> -->
            <picker-pic @getpick="getpick"></picker-pic>
            <mt-button type="primary"  class="bottom-btn2 middle-large" @click="submitForm">确认</mt-button>
        </div>
        
       <!-- 分类 -->
        <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
           <my-picker :slots="slots44" @selectValue="getSelectValue($event)"></my-picker>
        </mt-popup>

        <!-- 日期 -->
        <mt-popup v-model="popupVisible2" position="bottom" class="mint-popup">
          <picker-day @selectValue="getSelectValue2($event)"></picker-day>
        </mt-popup>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyPicker from '@/components/MyPicker'
import PickerPic from '@/components/PickerPic'
import PickerDay from '@/components/PickerDay'
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
          
            isDelete: false,
            dispearla: true,
            title: '记录血糖',
            currentTages: '',
            currentTages2: '',
            defaultShow:true, 
            popupVisible: false,
            popupVisible2: false,
            slots44: [{
                flex: 1,
                values: [
                    {
                        id:'1',
                        name: '晨起空腹'
                    },{
                        id:'2',
                        name: '早餐后2小时'
                    },{
                        id:'3',
                        name: '中餐后2小时'
                    },{
                        id:'4',
                        name: '晚餐后2小时'
                    },{
                        id:'5',
                        name: '睡前'
                    }
                ],
                className: 'slot1',
                textAlign: 'center'
            }],
            form:{
                imgs: [],
                sugar: '',
                date: '',
                typeId: '',
            }
        }
    },
    methods: {
        getpick (data){
          this.form.imgs = data;
        },
        openPicker() {
           this.popupVisible2 = true;
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
        formatNum(num){
            return num.toString().replace(/^(\d)$/, "0$1");
        },
        daytime(){
          var date = new Date();
          return date.getFullYear() + '-' + this.formatNum(date.getMonth() + 1) + '-' + this.formatNum(date.getDate())+
          ' '+ this.formatNum(date.getHours())+':'+this.formatNum(date.getMinutes())+':'+this.formatNum(date.getSeconds());
        },
        getpickn(){
          this.popupVisible = true;
        },
        getSelectValue(e){
            if(e[1]!=null){
                this.currentTages = e[1];
                this.form.typeId = e[1].id
                console.log(this.form.typeId)
            }
            this.popupVisible = e[0];
        },
        getSelectValue2(e){
            if(e[1]!=null){
                this.currentTages2 = e[1];
                this.form.date = e[1].id
                console.log(this.form.date)
            }
            this.popupVisible2 = e[0];
        },
        validatesort(){
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
        validateNumber(){
            if(this.form.sugar==''){
                Toast({
                    message: '请输入血糖',
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
               return false;
          }else{
              return true;
          }
        },
        getData() {
          var self = this;
          var time = this.daytime();
          this.$axios({
            method: 'get',
            url: self.baseurl.viewer+'/Xuetang_Record.jsp',
            params: {
              'skt138.skf2266': self.form.typeId,
              'skt138.skf2267': self.form.imgs,
              'skt138.skf2262': JSON.parse(localStorage.getItem('userInfoState')).userInfoState.vipID,
              'skt138.skf2263': 5,
              'skt138.sf_create_time': time,
              'skt138.skf2264': self.form.date,
              'skt138.skf2265': self.form.sugar
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
        submitForm(){
          if(this.validateNumber() && this.validatesort() && this.validateDate()){
            this.getData()
          }
        }
    },
    components: { MyHeader, MyPicker, PickerPic, PickerDay }
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
            margin-bottom: 0.2rem;
            span{
                position: absolute;
                right: 0.2rem;
                top: 50%;
                transform: translateY(-50%);
                font-size: 0.24rem;
            }
        }
        .input-text{
            width: 100%;
            height: 0.68rem;
            border: $border1;
            padding: 0.1rem 0.2rem;
            font-size: 0.28rem;
            box-sizing: border-box;
           
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
            font-size: 0.28rem;
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


