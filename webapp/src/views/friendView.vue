<template>
    <div>
        <my-header :title="title" :left="flag"></my-header>
        <el-main class="isheader">
            <con-list :list="list" :isshow="isshow"></con-list>
        </el-main>
    </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import ConList from '../components/ConList'

export default {
    components: { MyHeader, ConList },
    data() {
        return {
            title: '我的朋友',
            flag: true,
            isshow: false,
            list:[
                {
                    name: '张飞',
                    tel: '13522222215',
                    id: '2'
                },
                {
                    name: '关羽',
                    tel: '13522222216',
                    id: '1'
                }
            ]
        }
    },
    created() {
       
    }
    
}
</script>

<style>
.el-main{
    padding: 0;
}
</style>
