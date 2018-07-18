<template>
    <div class="home-list-view">
        <my-header :title="title" :left="true">
             <router-link :to="{name: 'recordWeightView'}" slot="record">
                <span>记体重</span>
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
                       <mt-button type="primary" class="middle-small">查询</mt-button>
                   </div>
                </div>
            </div>
            <div class="section-h">
                <div class="nav">
                    <p>曲线</p>
                </div>
                <div class="part-content bg-write">
                   <weight-charts></weight-charts>
                </div>
            </div>
            <div class="section-h">
                <div class="nav">
                    <p>饮食记录</p>
                </div>
                <div class="part-content2">
                   <ul>
                        <li v-for="item in list">
                            <div class="card-h"><span>{{item.sortType}}</span><span>{{item.time}}</span></div>
                            <div class="card-m">
                                <p>{{item.content}}</p>
                                <div class="img-list">
                                <div class="img" v-for="urlddd in item.imgs" :style="{ backgroundImage: 'url('+urlddd+')'}"></div>
                                </div>
                            </div>
                            <div class="card-b">
                                营养师评价:{{item.evaluation=="" ? "暂无评价":item.evaluation}}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import WeightCharts from '@/components/WeightCharts'

export default {
    data() {
        return{
            startValue: '',
            endValue: '',
            vFlag: '',
            startDate: new Date('2012'),
            endDate: new Date('2032-12-31'),
            pickerValue2: '2012-01-01',
            pickerValue: '2012-01-01',
            initialVal: '',
            points: '',
            title: '我的体重',
            list: [        //最近一条的数据
                {
                    sortType: '早餐',
                    time: '2018-03-09 8:00',
                    content: '我的丰盛早餐',
                    value: '6.2mmol/L',
                    imgs: ['http://img.hb.aicdn.com/df75487fbc3ad89bb0c42eee053c3fd2fdc6b18a12b99-qYfZrA_fw658'],
                    evaluation: '我是评价么'
                },
                {
                    sortType: '午餐',
                    time: '2018-03-09 12:00',
                    content: '今天午餐主食面条',
                    value: '6.2mmol/L',
                    imgs: [],
                    evaluation: ''
                },
                {
                    sortType: '晚餐',
                    time: '2018-03-09 17：00',
                    content: '我的晚餐',
                    value: '6.2mmol/L',
                    imgs: [],
                    evaluation: ''
                },
            ]
        }
    },
    methods:{
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
    components: { MyHeader,WeightCharts }
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
    padding-top:88px;
}
.bg-padding-b{
    padding-bottom:68px;
}
.padding-t-b-20{
   padding:108px 0 88px 0;
}
.padding-t-20{
   padding-top: 108px;
}
$border1: 1px solid #dedede;

.home-list-view{
    height: 100%;
    background-color:#f8f8f8;
    .no-data{
       width: 100%;
       text-align: center;
       i{
           margin-top: 300px;
       }
       p{
           color: #4C4C4C;
           font-size: 24px;
           line-height: 50px;
       }
    }
 
    ul{
         width: 100%;
        li{
            width: 100%;
            background-color:#fff;
            border-top: $border1;
            border-bottom: $border1;
            margin-bottom: 20px;
            padding-left: 20px;
            box-sizing: border-box;
            font-size: 28px;
            .card-h, .card-b{
                padding: 10px 0;
            }
            .card-h{
                display: flex;
                border-bottom: $border1;
                span{
                  flex: 1;
                  font-size: 24px;
                  color: #888888;
                }
                span:nth-child(2){
                   text-align: right;
                   padding-right: 20px;
                }
            }
            .card-m{
                border-bottom: $border1;
                padding-top:10px;
                .img-list{
                    display: flex;
                    flex-flow: row wrap;
                    .img{
                        width: 80px;
                        height: 80px;
                        border: $border1;
                        background-size: cover;
                        background-position: center center;
                        background-repeat: no-repeat;
                        display: inline-block;
                        margin:0 20px 20px 0;
                    }
                }
                // padding:20px 0;
                p{
                    line-height: 50px;
                    margin-bottom:10px;
                }
                
            }
        }
    }
    .more{
        width: 86%;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        padding: 20px 0;
    }
}


.border-t-20{
    border-bottom: 20px solid #f8f8f8;
}
.border-b-1{
    border-bottom: 1px solid #f1f1f1;
}
.border-l-6{
    border-left: 6px solid #AACB3C;
}
.section-h{
        @extend .border-t-20;
        .nav{
            height: 30px;
            padding: 15px 20px;
            background-color:#fff;
            p{
                height: 100%;
                @extend .border-l-6;
                padding-left: 22px;
                font-size: 20px;
                line-height: 30px;
            }
        }
        .chooseDate{
            padding: 20px;
            font-size: 24px;
            p{  
                width: 49.3%;
                display: inline-block;
                line-height: 50px;
                margin-bottom: 10px;
                text-align: center;
                span{
                    display: inline-block;
                    width: 240px;
                    text-align: center;
                    border: 1px solid #dedede;
                    color: #666;
                }
            }
        }
    }
</style>

