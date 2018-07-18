<template>
    <div>
        <div class="isnav">
            <my-map></my-map>
            <my-list :list="list" :listAds="true"></my-list>
        </div>
    </div>
</template>

<script>
import MyList from '@/components/MyList'
import MyMap from '@/components/Highmaps'

export default {
    data() {
        return {
            list: [
                {
                    title: '正大丽康杭州分公司',
                    city: '杭州',
                    address: '杭州市西湖区文一路233号',
                    tel: '0571-00022555',
                    id: '123'
                },
                {
                    title: '正大丽康上海分公司',
                    city: '上海',
                    address: '上海普陀区3343号',
                    tel: '0571-00022555',
                    id: '123'
                },
                {
                    title: '正大丽康上海分公司',
                    city: '上海',
                    address: '上海普陀区3343号',
                    tel: '0571-00022555',
                    id: '123'
                },
                {
                    title: '正大丽康上海分公司',
                    city: '上海',
                    address: '上海普陀区3343号',
                    tel: '0571-00022555',
                    id: '123'
                }
            ]
        } 
    },
    components: { MyList, MyMap }
}
</script>

<style>

</style>
