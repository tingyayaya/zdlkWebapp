<template>
    <div class="company-view">
        <my-header :title="title" :left="flag"></my-header>
        <my-nav :list="list"></my-nav>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import MyNav from '@/components/MyNav';

export default {
    components: { MyNav, MyHeader},
    data() {
        return {
            title: '公司简介',
            flag: true,
            list: [ {name: '公司新闻', router: 'news'}, {name: '关于我们',router: 'news'}, { name: '分支机构', router: 'news'}, { name: '促销活动', router: 'news'} ]
        }
    }
}
</script>

<style scoped>

.el-main{
    padding: 0;
}

</style>
