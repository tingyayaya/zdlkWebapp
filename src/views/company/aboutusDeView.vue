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
            title: '关于我们',
            flag: true,
            list: {
                content : '重视科技、提升品质。重视新科技的引进，引进最先进的生产工艺和种植、养殖品种，并加以改良生根，同时也非常重视品质的稳定及领先地位，以维护顾客的利益。利益结合、成果共享。正大集团坚信，在符合共同利益的原则下，获取合理的利润，才能不断茁壮成长、长远为民生福祉做出贡献。因此，始终把公司的发展与合作伙伴的利益紧密结合在一起，不仅提供优质产品，又负责回收成品，还提供饲养技术、指导与管理能力训练，以满足消费者日新月异的需求。'
            }
        }
    },
    components: { MyHeader, DetailList }
}
</script>

<style>

</style>
