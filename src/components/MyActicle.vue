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
        <div class="content">
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
    padding: 108px 20px 20px 20px;
    .content{
       text-align: justify;
       font-size: 28px;
    }
    .title{
        margin-bottom: 40px;
        p{
            font-size: 36px;
            margin-bottom: 20px;
        }
        i, span{
            color: #888;
            font-size: 24px;
        }
        .icon-icon-stars{
            margin-left: 20px;
        }
    }
}
</style>
