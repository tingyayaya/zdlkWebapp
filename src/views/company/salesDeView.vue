<template>
    <div>
        <my-header :title="list.type" :left="flag"></my-header>
        <div class="my-acticle isheader">
           <div class="title">
              <p>{{list.title}}</p>
              <i class="icon iconfont icon-icon-time"></i>
              <span>{{list.time}}</span>
          </div>
          <div class="content" v-html="list.content">
              {{list.content}}
          </div>
        </div> 
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import DetailList from '@/components/MyActicle';

export default {
    data() {
        return {
            flag: true,
            // list: {
            //     content : '活动时间：2018-03-05\活动地点：杭州市文三路1443\
            //      活动内容：重视科技、提升品质。重视新科技的引进，引进最先进的生产工艺和种植、养殖品种，并加以改良生根，同时也非常重视品质的稳定及领先地位，以维护顾客的利益。'
            // }
        }
    },
    computed:{
      list() {
        console.log(this.$store.getters.getArticleDetail)
        return this.$store.getters.getArticleDetail
      }
    },
    created() {
      var self = this;
      var id = this.$route.query.id;
      this.$store.dispatch('getArticleDetail', id)
    },
    methods:{
      
    },
    components: { MyHeader, DetailList }
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
