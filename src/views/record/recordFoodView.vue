<template>
    <div class="all-record-view">
        <my-header :left="true" :title="title"></my-header>
        <div class="content formBox">
            <div class="select" @click="getpickn"><span v-show="!currentTages">请选择分类</span><span>{{currentTages.name}}</span></div>
            <textarea name="" id="" placeholder="晒饮食，晒心情" v-model="form.text"></textarea>
            <picker-pic @getpick="getpick"></picker-pic>
            <mt-button type="primary"  class="bottom-btn middle-large" @click="submitForm">确认</mt-button>
        </div>
        <mt-popup v-model="popupVisible" position="bottom" class="mint-popup" >
          <my-picker :slots="slots44" :show="popupVisible" @selectValue="getSelectValue($event)"></my-picker>
        </mt-popup>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyPicker from '@/components/MyPicker'
import PickerPic from '@/components/PickerPic'
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
                        id:'11',
                        name: '早餐'
                    },{
                        id:'12',
                        name: '午餐'
                    },{
                        id:'13',
                        name: '晚餐'
                    },{
                        id:'14',
                        name: '夜宵'
                    }
                ],
                className: 'slot1',
                textAlign: 'center'
            }],
            form:{
                imgs: '',
                text: '',
                typeId: ''
            }
        }
    },
    methods: {
        getpick (data){
          this.form.imgs = data;
        },
        getpickn(){
            this.popupVisible = true;
        },
        getSelectValue(e){
            if(e[1]!=null){
                this.currentTages = e[1];
                this.form.typeId = e[1].id;
            }
            this.popupVisible = e[0];
        },
        formatNum(num){
            return num.toString().replace(/^(\d)$/, "0$1");
        },
        daytime(){
          var date = new Date();
          return date.getFullYear() + '-' + this.formatNum(date.getMonth() + 1) + '-' + this.formatNum(date.getDate())+
          ' '+ this.formatNum(date.getHours())+':'+this.formatNum(date.getMinutes())+':'+this.formatNum(date.getSeconds());
        },
        validateNumber(){
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
              'skt138.skf2263': 6,
              'skt138.skf2281': self.form.text,
              'skt138.sf_create_time': time,
              'skt138.skf2264': time
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
            if(this.validateNumber()){
              this.getData()
            }
        }
    },
    components: { MyHeader, MyPicker, PickerPic }
}
</script>

<style lang="scss" scoped>

$border1: 1px solid #dedede;

.mint-popup{
    width: 100%;
}

.all-record-view{
    .content{
        height: 100%;
        box-sizing: border-box;
        padding: 1.08rem 0.2rem 0.2rem 0.2rem;
        position: relative;
        .input-text{
            width: 100%;
            height: 0.68rem;
            border: $border1;
            padding: 0.2rem;
            box-sizing: border-box;
            font-size: 0.28rem;
            margin-bottom: 0.2rem;
        }
        .select{
            width: 100%;
            height: 0.68rem;
            border: 1px solid #dedede;
            font-size: 0.28rem;
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
