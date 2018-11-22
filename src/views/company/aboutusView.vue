<template>
    <div class="isnav">
        <my-list :list="list" :listTil="true" listTillink="aboutusDeView"></my-list>
    </div>
</template>

<script>
import MyList from '@/components/MyList'

export default {
    data() {
        return {
            list: [
                {
                    title: '公司简介',
                    id: '1',
                    dataList: ''
                },
                {
                    title: '公司文化',
                    id: '2'
                },
                {
                    title: '公司背景',
                    id: '3'
                },
                 {
                    title: '分支机构',
                    id: '4'
                }
            ]
        } 
    },
    components: { MyList }
}
</script>

<style>

</style>
