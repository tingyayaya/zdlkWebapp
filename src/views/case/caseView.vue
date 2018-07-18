<template>
    <div class="company-view">
        <my-header :title="title" :left="flag">
            <router-link :to="{name: 'healthView'}" slot="otherleft">
                 <i class="icon-z icon-z-arrow-left"></i>
            </router-link>
        </my-header>
        <my-nav :list="list" @tabchange = "listChild ($event)"></my-nav>
        <my-list :list="data" :listLeftPic="true" listLeftPicLink = "caseDeView" class="isnav"></my-list>
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
            title: '成功案例',
            flag: false,
            list: [ {name: '产后肥胖'}, {name: '高血糖'}, { name: '单纯性肥胖'},{ name: '高血压'},{ name: '高尿酸'}],
            data: [
                {
                    img: 'http://img.hb.aicdn.com/b87734aa50aceca53cc1cee9d145eb394054183960e23-HVnzLX_fw658',
                    title: '案例二',
                    id: '123'
                },
                {
                    img: 'http://img.hb.aicdn.com/1ec89f7633150fb0e9c28b0a40c956b60a65f54526a34-Eqaxel_fw658',
                    title: '案例一',
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

<style scoped>

.el-main{
    padding: 0;
}

</style>
