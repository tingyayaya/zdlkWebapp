<template>
    <div class="all-record-view">
        <my-header :left="true" :title="title"></my-header>
        <div class="content formBox">
            <div class="select" @click="openPicker"><span v-show="!currentTages">请选择日期</span><span>{{currentTages.id}}</span></div>
            <input type="text" placeholder="运动量" class="input-text" v-model="form['skt138.skf2274']">
            <input type="text" placeholder="饮水量" class="input-text" v-model="form['skt138.skf2275']">
            <input type="text" placeholder="大便次数" class="input-text" v-model="form['skt138.skf2276']">
            <input type="text" placeholder="钙片服用量" class="input-text" v-model="form['skt138.skf2277']">
            <input type="text" placeholder="维生素服用量" class="input-text" v-model="form['skt138.skf2278']">
            <input type="text" placeholder="饥饿感" class="input-text" v-model="form['skt138.skf2279']">
            <input type="text" placeholder="自我感觉" class="input-text" v-model="form['skt138.skf2280']">
            <mt-button type="primary"  class="bottom-btn middle-large" @click="submitForm">确认</mt-button>
        </div>
        <!-- 日期 -->
        <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
          <picker-day @selectValue="getSelectValue($event)"></picker-day>
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
            title: '记录运动量',
            currentTages: '',
            defaultShow:true, 
            popupVisible: false,
            form:{
                'skt138.skf2264': '',
                'skt138.skf2262': JSON.parse(localStorage.getItem('userInfoState')).userInfoState.vipID,
                'skt138.skf2274': '',
                'skt138.skf2275': '',
                'skt138.skf2276': '',
                'skt138.skf2277': '',
                'skt138.skf2278': '',
                'skt138.skf2279': '',
                'skt138.skf2280': '',
                'skt138.sf_create_time': '',
                'skt138.skf2263': 7
            }
        }
    },
    mounted(){
      
    },
    methods: {
        getSelectValue(e){
            if(e[1]!=null){
                this.currentTages = e[1];
                this.form['skt138.skf2264'] = e[1].id;
                console.log(this.form['skt138.skf2264'])
            }
            this.popupVisible = e[0];
        },
        getpick (data){
          this.form.imgs = data;
        },
        openPicker() {
           this.popupVisible = true;
        },
        handleConfirm(){ 
            this.form['skt138.skf2264'] = this.DateGMT(this.pickerValue);
        },
        DateGMT(time){
          var self = this;
            var str = new Date(time);
            return str.getFullYear() + '-' + this.formatNum(str.getMonth() + 1) + '-' + this.formatNum(str.getDate())
        },
        formatNum(num){
            return num.toString().replace(/^(\d)$/, "0$1");
        },
        daytime(){
          var date = new Date();
          return date.getFullYear() + '-' + this.formatNum(date.getMonth() + 1) + '-' + this.formatNum(date.getDate())+
          ' '+ this.formatNum(date.getHours())+':'+this.formatNum(date.getMinutes())+':'+this.formatNum(date.getSeconds());
        },
        getData() {
          var self = this;
          this.$axios({
            method: 'get',
            url: self.baseurl.viewer+'/Sport_Record.jsp',
            params: self.form
          })
          .then(function(res){
            if(res.data.code!=0){
              Toast({
                  message: '记录失败，请重试',
                  position: 'center',
                  duration: 3000
              });
              
              var timer = setTimeout(function(){
                  self.$router.push({name: 'recordView'})
              },1000)
            }else{
              Toast({
                  message: '记录成功',
                  position: 'center',
                  duration: 3000
              });
              var timer = setTimeout(function(){
                 self.$router.push({name: 'recordView'})
              },1000)
            }
          })
        },
        validateDate(){
           if(this.form['skt138.skf2264']==''){
                Toast({ 
                    message: '请选择日期',
                    position: 'center',
                    duration: 3000
                });
                
                return false;
           }else{
             return true;
           }
        },
        validate1(){
           if(this.form['skt138.skf2274']==''){
                Toast({
                    message: '请输入运动量',
                    position: 'center',
                    duration: 3000
                });
                return false;
           }else{
             return true;
           }
        },
        validate2(){
           if(this.form['skt138.skf2275']==''){
                Toast({
                    message: '请输入饮水量',
                    position: 'center',
                    duration: 3000
                });
                return false;
           }else{
             return true;
           }
        },
        submitForm(){
            this.form['skt138.sf_create_time'] = this.daytime();
            if(this.validateDate() && this.validate1() && this.validate2()){
              this.getData();
            }
            
        }
    },
    components: { MyHeader, MyPicker, PickerPic, PickerDay }
}
</script>

<style lang="scss" scoped>

$border1: 1px solid #dedede;

.all-record-view{
    .content{
        box-sizing: border-box;
        padding: 1.08rem 0.2rem 0.2rem 0.2rem;
        position: relative;
        .input-text{
            width: 100%;
            height: 0.68rem;
            border: $border1;
            padding: 0.1rem 0.2rem;
            box-sizing: border-box;
            margin-bottom: 0.2rem;
             font-size: 0.28rem;
        }
        .select{
            width: 100%;
            height: 0.68rem;
            border: 1px solid #dedede;
            line-height: 0.68rem;
            padding: 0 0.2rem;
            box-sizing: border-box;
            border-radius: 2px;
            margin-bottom: 0.2rem;
            font-size: 0.28rem;
        }
        textarea{
            width: 100%;
            height: 2.6rem;
            padding: 0.2rem;
            border: 1px solid #dedede;
            border-radius: 2px;
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
