<template>
    <div class="company-view">
        <my-header :title="title" :left="flag">
            <router-link :to="{name: 'healthView'}" slot="otherleft">
                 <i class="icon-z icon-z-arrow-left"></i>
            </router-link>
        </my-header>
        <my-nav :list="list" @tabchange = "listChild ($event)"></my-nav>
        <my-list :list="data" :listRightPic="true" listRightPicLink = "sportsDeView" class="isnav"></my-list>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import MyNav from '@/components/MyNav';
import MyList from '@/components/MyList';

export default {
    components: { MyNav, MyHeader, MyList},
    data() {
        return {
            title: '运动加油站',
            flag: false,
            list: [ {name: '分类1'}, {name: '分类2'}, { name: '分类3'},{ name: '分类4'},{ name: '分类5'}],
            data: [
                {
                    img: 'http://img.hb.aicdn.com/b87734aa50aceca53cc1cee9d145eb394054183960e23-HVnzLX_fw658',
                    title: '听说你工作太忙没空运动？别为懒找借口',
                    time: '2017-02-11',
                    id: '123'
                },
                {
                    img: 'http://img.hb.aicdn.com/1ec89f7633150fb0e9c28b0a40c956b60a65f54526a34-Eqaxel_fw658',
                    title: '营养指导，让你健康瘦身',
                    time: '2017-02-11',
                    id: '123'
                }
            ]
        }
    },
    methods: {
        listChild(e) {
            console.log(e)
        }
    }
}
</script>

<style scoped>

.el-main{
    padding: 0;
}

</style>
