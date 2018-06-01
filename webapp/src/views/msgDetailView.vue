<template>
    <div class="msg-detail-view">
        <my-header :title="title" :left="flag"></my-header>
        <el-main class="isheader home-view">
            <span>{{msg.time}}</span>
            <p>{{msg.title}}</p>
        </el-main>
    </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
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
    .home-view{
        text-align: center;
        p{
            text-align: left;
            margin-top: 20px;
        }
        span{
            color: #888;
            font-size: 24px;
            
        }
    }
}
</style>
