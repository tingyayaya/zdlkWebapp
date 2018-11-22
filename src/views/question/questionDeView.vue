<template>
    <div class="detail-view">
        <my-header :title="title" :left="flag" >
            <i class="icon-z " :class="star ? 'icon-z-star':'icon-z-unstar'" slot="stars"  @click="starToggle"></i>
        </my-header>
        <div>
           <detail-list :list="list" :type1="true"></detail-list>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import DetailList from '@/components/MyActicle';
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            title: '关注的问题',
            articalId: '',
            flag: true,
            star: false,
            list: ''
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
            var self = this;
           
            if(!this.star){
               this.$store.dispatch('toCollect', {'lx':this.title, 'id': this.articalId }).then(function(){
                 if(self.$store.getters.toCollect){
                    self.star = ! self.star;
                    Toast({
                      message: '收藏'+self.$store.getters.toCollect,
                      duration: 2500
                    });
                 }
               });
               
            }
            
        }
    },
    components: { MyHeader, DetailList }
    
}
</script>

<style lang="scss">

</style>