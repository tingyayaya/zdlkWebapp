<template>
    <div class="company-view">
        <my-header :title="title" :left="flag">
            <router-link :to="{name: 'healthView'}" slot="otherleft">
                 <i class="icon-z icon-z-arrow-left"></i>
            </router-link>
        </my-header>
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
            title: '健康知识',
            flag: false,
            list: [ {name: '公司新闻', router: 'newsView'}, {name: '关于我们',router: 'aboutusView'}, { name: '分支机构', router: 'branchView'}, { name: '促销活动', router: 'salesView'} ]
        }
    }
}
</script>

<style scoped>

</style>
