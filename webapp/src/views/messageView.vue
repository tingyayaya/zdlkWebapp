<template>
    <div class="message-view">
        <my-header :title="title" :left="flag" ></my-header>
        <el-main class="home-view isheader">
            <message mymsg="msgList"></message>
        </el-main>
    </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import Message from '../components/Message'

export default {
   name: 'message-view',
   components: { MyHeader, Message},
   props: [ 'msglist', 'msgFirst' ],
   data() {
       return {
           title: '消息',
           flag: true,
           
       }
   }
}
</script>

<style lang="scss" scoped>
.message-view{
    .el-main{
        padding: 0;
    }
}
</style>
