<template>
    <div class="company-view">
        <my-header :title="title" :left="flag"></my-header>
        <search-bar path2="cookSearchView"></search-bar>
        <my-nav :list="list" @tabchange = "listChild ($event)" :ishassearch='true'></my-nav>
        <my-list :list="data" :listRightPic="true" listRightPicLink="cookDeView" class="hasnavsearch"></my-list>
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
                    title: '养颜护胃，五谷中最养人的就是它',
                    time: '2017-02-11',
                    img: 'http://img.hb.aicdn.com/f6f66c05e23457f8ac0f76e50091fb524d012261212b4-gQCLD6_fw658',
                    star: '335',
                    id: '123'
                },
                {
                    title: '营养指导，让你健康瘦身',
                    img: 'http://img.hb.aicdn.com/7fedfafb022185a637a0fde87eb252cf64a3c5c61de8d-vWla8U_fw658',
                    time: '2017-02-11',
                    star: '335',
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
