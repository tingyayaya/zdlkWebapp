<template>
    <div class="message">
        <router-link class="list" v-for="item in list" :to="{ name: 'msgDetailView', query: { id: item.id}}" v-if="mymsg=='msgList'" :key="item.id">
            <p>{{item.title}}</p>
            <span>{{item.time}}</span>
        </router-link>
        <router-link class="first" :to="{ name: 'msgDetailView', query: { id: list[0].id}}" v-if="mymsg=='msgFirst'">
            <p>{{list[0].title}}</p>
            <span>正大丽康温馨提示：显示最新的消息推送</span>
        </router-link>
        <router-link v-if="mymsg=='msgFirst'" :to="{ name: 'dietRecordView'}" class="btn">
            <el-button type="primary" round class="medium">查看往期饮食记录</el-button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'message',
    props: [ 'mymsg'],
    data(){
        return {
            list :[
               {
                   title: '尊敬的****（姓名+先生、女士），您进入正大丽康营养干预已经有  天了，目前处于***阶段第n天。营养师：***，手机：****',
                   time: '2017-02-11 15:00',
                   id: '3'
               },

               {
                   title: '请尽快更新您的信息，方便我们营养师给您提供健康的养生方式',
                   time: '2017-02-11 15:00',
                   id: '2'
               },
               {
                   title: '日程提醒提醒您，请查看今日日程！',
                   time: '2017-02-11 10:23',
                   id: '1'
               }
           ]
        }
    }
}
</script>

<style lang="scss" scoped>
.border-b{
    border-bottom: 1px solid #dedede;
}
.message{
    .list{
        display: block;
        width: 100%;
        @extend .border-b;
        padding: 20px;
        box-sizing: border-box;
        p{
            font-size: 30px;
            line-height: 40px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        span{
            font-size: 24px;
            color: #888;
        }
    }
    .first{
        display: block;
        padding: 20px;
        font-size: 24px;
        p{
            line-height: 40px;
        }
        span{
            color: #6b6b6b !important;
            line-height: 100px;
        }
    }
    .btn{
         width: 100%;
         display: inline-block;
         text-align: center;
         padding-bottom: 40px;
    }
}
</style>
