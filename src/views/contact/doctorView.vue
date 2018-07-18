<template>
    <div>
        <my-header :title="title" :left="flag"></my-header>
        <div class="isheader">
            <con-list :list="list" :isshow="isshow"></con-list>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import ConList from '@/components/ConList'

export default {
    name: 'diet-view',
    components: { MyHeader, ConList },
    data() {
        return {
            title: '我的医生',
            flag: true,
            isshow: true,
            list:[
                {
                    name: '朱小猪',
                    technicalTitle: '专职医生',
                    tel: '13522222215',
                    id: '3'
                }
            ]
        }
    },
    created() {
       
    }
    
}
</script>

<style>

</style>
