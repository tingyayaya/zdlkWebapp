<template>
    <div class="all-record-view">
        <my-header :left="true" :title="title"></my-header>
        <div class="content formBox">
            <div class="input-danwei">
                <span>cm</span>
                <input type="number" placeholder="请输入腰围" class="input-text" v-model="form.weight">
            </div>
            <div class="select" @click="openPicker"><span v-show="!currentTages">请选择时间</span><span>{{currentTages.name}}</span></div>
            <picker-pic @getpick="getpick"></picker-pic>
            <mt-button type="primary"  class="bottom-btn2 middle-large" @click="submitForm">确认</mt-button>
        </div>
        <mt-popup v-model="popupVisible" position="bottom" class="mint-popup" >
          <picker-day @selectValue="getSelectValue($event)"></picker-day>
        </mt-popup>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import PickerPic from '@/components/PickerPic'
import PickerDay from '@/components/PickerDay'
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            isDelete: false,
            title: '记录腰围',
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
        getpick (data){
          this.form.imgs = data;
        },
        getData() {
          var self = this;
          var time = this.daytime();
          this.$axios({
            method: 'get',
            url: self.baseurl.viewer+'/Weight_Record.jsp',
            params: {
              'skt138.skf2265': self.form.weight,
              'skt138.skf2264': self.form.date,
              'skt138.skf2267': self.form.imgs,
              'skt138.skf2262': JSON.parse(localStorage.getItem('userInfoState')).userInfoState.vipID,
              'skt138.skf2263': 4,
              'skt138.sf_create_time': time
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
           this.popupVisible = true;
        },
        handleConfirm(){ 
            this.form.date = this.DateGMT(this.pickerValue);
        },
        formatNum(num){
            return num.toString().replace(/^(\d)$/, "0$1");
        },
        DateGMT(time){
          var self = this;
            var str = new Date(time);
            return str.getFullYear() + '-' + this.formatNum(str.getMonth() + 1) + '-' + this.formatNum(str.getDate())
        },
        daytime(time){
          var date = new Date();
          return date.getFullYear() + '-' + this.formatNum(date.getMonth() + 1) + '-' + this.formatNum(date.getDate())+
          ' '+ this.formatNum(date.getHours())+':'+this.formatNum(date.getMinutes())+':'+this.formatNum(date.getSeconds());
        },
        getSelectValue(e){
            if(e[1]!=null){
                this.currentTages = e[1];
                this.form.date = this.currentTages.id;
                console.log(this.form.date)
            }
            this.popupVisible = e[0];
        },
        getImages(e){
            var self = this;
            var oFiles = e.target.files;
            var formData = new FormData();
            

            formData.append("domainid","156");
            for(var i=0;i<oFiles.length;i++){
              
              formData.append(oFiles[i].name, oFiles[i]);
            }
           
            if(oFiles.length !=0){
              self.$axios({
                method: 'post',
                url: self.baseurl.imgsurl,
                headers: { 'Content-Type': 'multipart/form-data' },
                data: formData
              })
              .then(function(res){
                //console.log(res)
                if(res.data.code==0&&res.data.msg=='成功'){
                  var arr = res.data.data.split(';');
                  for(var i=0; i<arr.length-1; i++){
                    self.form.imgs.push(self.baseurl.imgdownloadurl+arr[i]+'&filename='+arr[i]);
                  }
                }
                self.$refs.feedbakcImg.value ='';
              })
            }
        },
        delete2(num){
            this.form.imgs.splice(num, 1);
        },
        validateWeight(){
            if(this.form.weight==0){
                Toast({
                    message: '请输入腰围',
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
        submitForm(){
          if(this.validateWeight()&&this.validateDate()){
            this.getData();
          }
        }
    },
    components: { MyHeader, PickerPic, PickerDay }
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
            box-sizing: border-box;
            font-size: 0.28rem;
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
        
    }
    .formBox{
        font-size: 0.3rem;
    }
}


</style>
