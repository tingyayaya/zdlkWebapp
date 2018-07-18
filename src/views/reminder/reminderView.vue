<template>
    <div class="reminder bg-grey">
        <my-header :left="false" :title="title">
            <router-link :to="{name: 'mineView'}" slot="otherleft">
                <i class="icon-z icon-z-arrow-left"></i>
            </router-link>
        </my-header>
        <div class="isheader">
            <vue-event-calendar :events="demoEvents" :title="title2" @day-changed="handleDayChanged"></vue-event-calendar>
            <div class="no-data" v-show="demoEvents.length==0"><i class="icon-z icon-z-nolist"></i><p>您还没有日程提醒</p></div>
            <ul class="envet-list">
                <p class="title-t">{{title2}}</p>
                <li v-for="item in demoEvents">
                    <div class="title-part">
                        <p class="title-remind">{{item.title}}</p>
                        <span>{{item.remindTime}}提醒</span>
                    </div>
                    <div>
                        <p>{{item.desc}}</p>
                    </div>
                </li>
            </ul>
            <mt-button size="large" type="primary" class="btn-large margin-top-20" @click="add">添加提醒</mt-button>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'

export default {
    data() {
        return {
            title: '日程提醒',
            title2: '',
            demoEvents: [{
                date: '2018/06/11', // 必填
                remindTime: '16:00',
                desc: '很重要',
                title: '开会，主题大会' // 必填
            }, {
                date: '2016/12/15',
                title: '开会，主题大会',
                remindTime: '16:00',
                desc: '很重要',
                customClass: 'disabled highlight' // 自定义日历单元格的Class，会加到对应的日历单元格上
            }],
            currentEvents:[]
        }
    },
    created(){
        this.title2 = this.getNowDate();
        sessionStorage.date = this.title2;
    },
    methods: {
        handleDayChanged (day) {
            this.$EventCalendar.toDate(day.date)
            this.title2 = day.date;
            sessionStorage.date = this.title2;
        },
        add(){
            this.$router.push({name :'addRemListView'})
        },
        getNowDate(){
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
        }
    },
    components: { MyHeader }
}
</script>

<style lang="scss">
.bg-grey{
    background-color:#f8f8f8;
}
.reminder{
    min-height: 100%;
}
.events-wrapper{
    display: none;
}
//修改样式
.today{
    color: #AACB3C;
}
.__vev_calendar-wrapper .cal-wrapper{
    height: 420px;
    overflow: hidden;
}
.events-wrapper{
   background: inherit !important;
}
.selected-day {
   position: relative;
   z-index: 99;
   color: #fff;
}
.cal-body{
    background-color: #fff;
}
.selected-day:after{
    position: absolute;
    content: '';
    width: 52px;
    height: 38px;
    background: #F9BA17;
    display: block;
    border-radius: 2px;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.event .date-num{
   color: #fff !important;
}
.margin-top-20{
    margin-top:60px;
}
.no-data{
       width: 100%;
       text-align: center;
       i{
           margin-top: 100px;
       }
       p{
           color: #4C4C4C;
           font-size: 24px;
           line-height: 50px;
       }
    }

.envet-list{
    margin: 20px 0;
    .title-t{
        text-align: center;
        padding: 10px 0;
        color:#888888;
    }
    li{
        background: #fff;
        border-top: 1px solid #dedede;
        border-bottom: 1px solid #dedede;
        margin-bottom: 20px;
        box-sizing: border-box;
        padding: 20px;
        color: #888;
        font-size: 24px;
        .title-part{
            display: flex;
            span{
                flex:1;
                text-align: right;
                line-height: 44px;
            }
            p{
                flex:3;
                text-align: left;
                overflow: hidden;
            }
        }
        .title-remind{
            font-size: 30px;
            color: #000;
        }
    }
}
</style>
