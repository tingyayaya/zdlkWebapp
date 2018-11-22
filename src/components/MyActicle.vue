<template>
    <div class="my-acticle isheader">
        <div class="title" v-if="type1">
            <p>{{list.title}}</p>
            <i class="icon iconfont icon-icon-time"></i>
            <span>{{list.time}}</span>
            <i class="icon iconfont icon-icon-stars"></i>
            <span>{{list.num}}</span>
        </div>
        <div class="title" v-if="type2">
            <p>{{list.title}}</p>
            <i class="icon iconfont icon-icon-time"></i>
            <span>{{list.time}}</span>
        </div>
        <div class="content" v-html="list.content">
            {{list.content}}
        </div>
    </div>
</template>

<script>
export default {
    name: "my-acticle",
    props: { 
        list: Object,
        type1: {
            type: Boolean,
            default: false
        },
        type2: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style lang="scss" scoped>
.my-acticle{
    padding: 1.08rem 0.2rem 0.2rem 0.2rem;
    .content{
       text-align: justify;
       font-size: 0.28rem;
    }
    .title{
        margin-bottom: 0.4rem;
        p{
            font-size: 0.36rem;
            margin-bottom: 0.2rem;
        }
        i, span{
            color: #888;
            font-size: 0.24rem;
        }
        .icon-icon-stars{
            margin-left: 0.2rem;
        }
    }
}
</style>
