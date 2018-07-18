<template>
    <div>
        <my-header :title="title" :left="flag"></my-header>
        <div>
           <detail-list :list="list"></detail-list>
        </div> 
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import DetailList from '@/components/MyActicle';

export default {
    data() {
        return {
            title: '促销活动',
            flag: true,
            list: {
                content : '活动时间：2018-03-05\活动地点：杭州市文三路1443\
                 活动内容：重视科技、提升品质。重视新科技的引进，引进最先进的生产工艺和种植、养殖品种，并加以改良生根，同时也非常重视品质的稳定及领先地位，以维护顾客的利益。'
            }
        }
    },
    methods:{
      
    },
    components: { MyHeader, DetailList }
}
</script>

<style>

</style>
