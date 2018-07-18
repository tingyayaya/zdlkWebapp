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
                    title: '公司文化',
                    id: '123'
                },
                {
                    title: '公司背景',
                    id: '123'
                }
            ]
        } 
    },
    components: { MyList }
}
</script>

<style>

</style>
