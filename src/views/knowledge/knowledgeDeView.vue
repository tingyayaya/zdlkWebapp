<template>
    <div class="detail-view">
        <my-header :title="title" :left="flag" >
            <i class="icon-z " :class="star ? 'icon-z-star':'icon-z-unstar'" slot="stars"  @click="starToggle"></i>
        </my-header>
        <div class="my-acticle isheader">
            <div class="title">
                <p>{{list.title}}</p>
                <i class="icon iconfont icon-icon-time"></i>
                <span>{{list.time}}</span>
                <i class="icon iconfont icon-icon-stars"></i>
                <span>{{list.num}}</span>
            </div>
            <div class="content" v-html="list.content">
                {{list.content}}
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            title: '健康知识',
            articalId: '',
            flag: true,
            star: false,
        }
    },
    computed:{
      list() {
        return this.$store.getters.getArticleDetail
      }
    },
    created() {
      var self = this;
      var id = this.articalId = this.$route.query.id;
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
    components: { MyHeader }
    
}
</script>

<style lang="scss" scoped>
.my-acticle{
    padding: 1.08rem 0.2rem 0.2rem 0.2rem;
    .content{
       text-align: justify;
       font-size: 0.28rem;
    }
    .title{
        margin-bottom: 0.4rem;
        p{
            font-size: 0.36rem;
            margin-bottom: 0.2rem;
        }
        i, span{
            color: #888;
            font-size: 0.24rem;
        }
        .icon-icon-stars{
            margin-left: 0.2rem;
        }
    }
}
</style>