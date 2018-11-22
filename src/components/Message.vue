<template>
    <div class="message">
        <router-link class="list" v-for="item in msg" :to="{ name: 'msgDetailView', query: { id: item.id}}" v-if="mymsg=='msgList'" :key="item.id">
            <p>{{item.title}}</p>
            <span>{{item.time}}</span>
        </router-link>
        <div class="first" v-if="mymsg=='msgFirst'">
            <p>{{msg}}</p>
            <span>正大丽康温馨提示：显示最新的消息推送</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'message',
    props: [ 'mymsg', 'msg'],
    data(){
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.border-b{
    border-bottom: 1px solid #dedede;
}
.message{
    a:active{
        background: #f8f8f8;
    }
    .list{
        display: block;
        width: 100%;
        @extend .border-b;
        padding: 0.2rem;
        box-sizing: border-box;
        p{
            font-size: 0.3rem;
            line-height: 0.4rem;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        span{
            font-size: 0.24rem;
            color: #888;
            line-height: 0.44rem;
        }
    }
    .first{
        display: block;
        padding: 0.2rem;
        font-size: 0.24rem;
        p{
            line-height: 0.4rem;
        }
        span{
            color: #6b6b6b !important;
            line-height: 1rem;
        }
    }
    .btn{
         width: 100%;
         display: inline-block;
         text-align: center;
         padding-bottom: 0.4rem;
    }
}
</style>
