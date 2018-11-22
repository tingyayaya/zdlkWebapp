<template>
    <div class="my-collect isheader">
       <my-header :left="true" :title="title"></my-header>
       <my-list :listRightPic="true" listRightPicLink="myCollectDeView" :list="list" v-if="list"></my-list>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyList from '@/components/MyList'

export default {
    data() {
        return {
            title: '我的收藏',
        }
    },
    computed: {
      list(){
        return this.$store.getters.getCollect;
      }
    },
    created(){
      this.$store.dispatch('getCollect');
    },
    components: { MyHeader, MyList }
}
</script>

<style>

</style>
