<template>
    <div class="reminder bg-grey">
        <my-header :left="false" :title="title">
            <router-link :to="{name: 'mineView'}" slot="otherleft">
                <i class="icon-z icon-z-arrow-left"></i>
            </router-link>
        </my-header>
        <div class="isheader">
            <vue-event-calendar :events="events" :title="title2" @day-changed="handleDayChanged"></vue-event-calendar>
            <div class="no-data" v-show="currentEvents.length==0"><i class="icon-z icon-z-nolist"></i><p>您还没有日程提醒</p></div>
            <ul class="envet-list">
                <p class="title-t">{{title2}}</p>
                <li v-for="item in currentEvents">
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
            currentEvents:[],
            events: []
        }
    },
    created(){
      var self = this;
      this.title2 = this.getNowDate();
      this.$store.dispatch('getSchedule', this.title2).then(function(){
        var des = self.$store.getters.getSchedule;
        self.currentEvents = des
      })
    },
    methods: {
        handleDayChanged (day) {
            var self = this;
            var date = day.date.replace(/\//g, '-')
            this.$store.dispatch('getSchedule', date).then(function(){
               self.$EventCalendar.toDate(day.date)
               self.title2 = day.date;
               sessionStorage.date = date;
               var data = self.$store.getters.getSchedule
               self.currentEvents = data 
            });
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

.events-wrapper{
   background: inherit !important;
}
.selected-day {
   position: relative;
   z-index: 99 !important;
   color: #fff !important;
}
.cal-body{
    background-color: #fff;
}
.selected-day:after{
    position: absolute;
    content: '';
    width: 0.52rem;
    height: 0.38rem;
    background: #F9BA17;
    display: block;
    border-radius: 0.02rem;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.event .date-num{
   color: #fff !important;
}
.margin-top-20{
    margin-top:0.6rem;
}
.no-data{
       width: 100%;
       text-align: center;
       i{
           margin-top: 1rem;
       }
       p{
           color: #4C4C4C;
           font-size: 0.24rem;
           line-height: 0.5rem;
       }
    }

.envet-list{
    margin: 0.2rem 0;
    .title-t{
        text-align: center;
        padding: 0.1rem 0;
        color:#888888;
    }
    li{
        background: #fff;
        border-top: 1px solid #dedede;
        border-bottom: 1px solid #dedede;
        margin-bottom: 0.2rem;
        box-sizing: border-box;
        padding: 0.2rem;
        color: #888;
        font-size: 0.24rem;
        .title-part{
            display: flex;
            span{
                flex:1;
                text-align: right;
                line-height: 0.44rem;
            }
            p{
                flex:3;
                text-align: left;
                overflow: hidden;
            }
        }
        .title-remind{
            font-size: 0.3rem;
            color: #000;
        }
    }
}
</style>
