<template>
    <div class="my-collect">
        <my-header :left="true" :title="list.title">
            <i class="icon-z " :class="star ? 'icon-z-star':'icon-z-unstar'" slot="stars"  @click="starToggle"></i>
        </my-header>
        <my-acticle :list="list" :type1="true" v-if="list"></my-acticle>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyActicle from '@/components/MyActicle'
import CollectLike from '@/components/Collect'
import { Toast } from 'mint-ui';

export default {
    data() {
        return{
            title: '',
            star: true
        }
    },
    computed:{
      list() {
        return this.$store.getters.getArticleDetail
      }
    },
    created() {
      var self = this;
      var id = this.$route.query.id;
      this.$store.dispatch('getArticleDetail', id)
    },
    methods: {
        starToggle() {
            // this.star = ! this.star;
            // if(this.star){
            //    Toast({
            //        message: '收藏成功',
            //        duration: 2500
            //    });
            // }else{
            //     Toast({
            //        message: '取消收藏',
            //        duration: 2500
            //    });
            // }
        }
    },
    components: { MyHeader, MyActicle, CollectLike }
}
</script>

<style>

</style>