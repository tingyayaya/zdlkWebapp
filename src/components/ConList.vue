<template>
    <ul class="con-list">
        <li v-for="item in list" :key="item.id">
           <label>{{item.name}}</label>
           <p v-if="isshow">职称：<span>{{item.technicalTitle}}</span></p>
           <p>联系方式：<span class="green">{{item.tel}}</span> <i class="icon iconfont icon-contact-tel"></i></p>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'con-list',
    props: { list: Array, isshow: Boolean }
}
</script>

<style lang="scss" scoped>
.con-list{
    width: 100%;
    li{
        border-bottom: 1px solid #dedede;
        padding: 0.2rem;
        font-size: 0.28rem;
        line-height: 0.44rem;
        p{
           color: #888;
           .green{
               color: #5B873C;
           }
           .icon-contact-tel{
               color: #F9BA17;
               font-size: 0.3rem;
               margin-left: 0.2rem;
           }
        }
    }
}
</style>
