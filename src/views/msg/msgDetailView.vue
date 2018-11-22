<template>
    <div class="msg-detail-view">
        <my-header :title="title" :left="flag"></my-header>
        <div class="isheader mymessage">
            <span>{{msg.time}}</span>
            <p>{{msg.title}}</p>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
export default {
    name: 'msg-detail-view',
    components: { MyHeader },
    data() {
        return {
            title: '消息详情',
            flag: true,
            msg: {
                   title: '尊敬的****（姓名+先生、女士），您进入正大丽康营养干预已经有  天了，目前处于***阶段第n天。营养师：***，手机：****',
                   time: '2017-02-11 15:00',
                   id: '1'
                }
           
        }
    }
}
</script>

<style lang="scss" scoped>
.msg-detail-view{
    .mymessage{
        text-align: center;
        padding: 1.08rem 0.2rem 0.2rem 0.2rem;
        p{
            text-align: left;
            margin-top: 0.2rem;
            text-align: justify;
        }
        span{
            color: #888;
            font-size: 0.24rem;
            
        }
    }
}
</style>
