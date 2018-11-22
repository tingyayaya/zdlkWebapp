<template>
    <div class="home-list-view">
        <my-header :title="title" :left="true">
             <router-link :to="{name: 'recordUrineView'}" slot="record">
                <span>记尿酮</span>
            </router-link>
        </my-header>
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
       <mt-datetime-picker
            ref="picker2"
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            v-model="pickerValue2"
            :startDate="startDate"
            :endDate="endDate"
            @confirm="handleConfirm2">
        </mt-datetime-picker>
        <div class="bg-grey padding-t-20 myhome-list">
            <div class="section-h">
                <div class="part-content bg-write">
                   <div class="chooseDate">
                       <p>开始日期：<span class="starDate" @click="openPicker">{{startValue==""?'请选择时间':startValue}}</span></p>
                       <p>结束日期：<span class="endDate" @click="openPicker2">{{endValue==""?'请选择时间':endValue}}</span></p>
                       <mt-button type="primary" class="middle-small" @click="check">查询</mt-button>
                   </div>
                </div>
            </div>
            <div class="section-h">
                <div class="nav">
                    <p>曲线</p>
                </div>
                <div class="part-content bg-write">
                   <urine-charts :dataList = "dataList" :chartTitle="chartTitle" v-if="flag" :initVal="initVal" containerId="container1" @selectDate="selectDate"></urine-charts>
                </div>
            </div>
            <div class="section-h">
                <div class="nav">
                    <p>饮食记录</p>
                </div>
                <div class="part-content2">
                  <fist-food-list :foodlist = 'foodlist'></fist-food-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import UrineCharts from '@/components/UrineCharts'
import FistFoodList from '@/components/FistFoodList'
export default {
    data() {
        return{
            chartTitle: '尿酮曲线变化',
            initVal: '',
            flag: false,
            dataList: [],
            startValue: '',
            endValue: '',
            vFlag: '',
            startDate: new Date('2012'),
            endDate: new Date('2032-12-31'),
            pickerValue2: new Date(),
            pickerValue: new Date(),
            points: '',
            title: '我的尿酮',
            foodlist: []
        }
    },
     created(){
      var self = this;
      this.$store.commit('getDate')
      this.$store.dispatch('getUrineList').then(function(){
       
        self.dataList = self.$store.getters.getUrineList;
        self.flag = true;
      })
      //初始值
      sessionStorage.initVal = '1';
    },
    methods:{
          selectDate(e){
            var self = this;
            this.$store.dispatch('getCurDiet' , e).then(function(){
              self.foodlist = self.$store.getters.getCurDiet;
            })
         },
         check(){
          var self =this;
          if(!(this.startValue&&this.endValue)){
            Toast({
              message: '请选择日期',
              position: 'middle',
              duration: 3000
            })
          }else{
            this.$store.dispatch('getUrineList',[this.startValue,this.endValue]).then(function(){
              self.dataList = self.$store.getters.getUrineList;
            })
          }
        },
        openPicker() {
           this.$refs.picker.open(); 
        },
        openPicker2(){
           this.$refs.picker2.open(); 
        },
        handleConfirm(){ 
            this.startValue= this.DateGMT(this.pickerValue);
        },
        handleConfirm2(){
            this.endValue= this.DateGMT(this.pickerValue2);
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
    },
    components: { MyHeader, UrineCharts,FistFoodList}
}
</script>

<style lang="scss" scoped>

.bg-grey{
    background-color:#f8f8f8;
}
.bg-write{
    background-color:#fff !important;
}
.bg-padding-t{
    padding-top:0.88rem;
}
.bg-padding-b{
    padding-bottom:0.68rem;
}
.padding-t-b-20{
   padding:1.08rem 0 0.88rem 0;
}
.padding-t-20{
   padding-top: 1.08rem;
}
$border1: 1px solid #dedede;

.home-list-view{
    height: 100%;
    background-color:#f8f8f8;
    .no-data{
       width: 100%;
       text-align: center;
       i{
           margin-top: 3rem;
       }
       p{
           color: #4C4C4C;
           font-size: 0.24rem;
           line-height: 0.5rem;
       }
    }
 
    ul{
         width: 100%;
        li{
            width: 100%;
            background-color:#fff;
            border-top: $border1;
            border-bottom: $border1;
            margin-bottom: 0.2rem;
            padding-left: 0.2rem;
            box-sizing: border-box;
            font-size: 0.28rem;
            .card-h, .card-b{
                padding: 0.1rem 0;
            }
            .card-h{
                display: flex;
                border-bottom: $border1;
                span{
                  flex: 1;
                  font-size: 0.24rem;
                  color: #888888;
                }
                span:nth-child(2){
                   text-align: right;
                   padding-right: 0.2rem;
                }
            }
            .card-m{
                border-bottom: $border1;
                padding-top:0.1rem;
                .img-list{
                    display: flex;
                    flex-flow: row wrap;
                    .img{
                        width: 0.8rem;
                        height: 0.8rem;
                        border: $border1;
                        background-size: cover;
                        background-position: center center;
                        background-repeat: no-repeat;
                        display: inline-block;
                        margin:0 0.2rem 0.2rem 0;
                    }
                }
                // padding:0.2rem 0;
                p{
                    line-height: 0.5rem;
                    margin-bottom:0.1rem;
                }
                
            }
        }
    }
    .more{
        width: 86%;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        padding: 0.2rem 0;
    }
}


.border-t-20{
    border-bottom: 0.2rem solid #f8f8f8;
}
.border-b-1{
    border-bottom: 1px solid #f1f1f1;
}
.border-l-6{
    border-left: 0.06rem solid #AACB3C;
}
.section-h{
        @extend .border-t-20;
        .nav{
            height: 0.3rem;
            padding: 0.15rem 0.2rem;
            background-color:#fff;
            p{
                height: 100%;
                @extend .border-l-6;
                padding-left: 0.22rem;
                font-size: 0.24rem;
                line-height: 0.3rem;
            }
        }
        .chooseDate{
            padding: 0.2rem;
            font-size: 0.24rem;
            p{  
                width: 49.3%;
                display: inline-block;
                line-height: 0.5rem;
                margin-bottom: 0.1rem;
                text-align: center;
                span{
                    display: inline-block;
                    width: 2.4rem;
                    text-align: center;
                    border: 1px solid #dedede;
                    color: #666;
                }
            }
        }
    }
</style>

