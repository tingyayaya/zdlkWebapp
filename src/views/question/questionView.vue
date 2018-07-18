<template>
    <div class="company-view">
        <my-header :title="title" :left="flag"></my-header>
        <search-bar path2="questionSearchView"></search-bar>
        <my-nav :list="list" @tabchange = "listChild ($event)" :ishassearch='true'></my-nav>
        <my-list :listRightPic="true" listRightPicLink="questionDeView" :list="data" class="hasnavsearch"></my-list>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import MyNav from '@/components/MyNav';
import MyList from '@/components/MyList';
import SearchBar from '@/components/SearchBar';

export default {
    components: { MyNav, MyHeader, MyList, SearchBar},
    data() {
        return {
            title: '关注的问题',
            flag: true,
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
            //console.log(e)
        }
    }
}
</script>

<style scoped lang="scss">
.el-main{
    padding: 0;
}
.hasnavsearch{
    padding-top: 254px;
}
</style>
