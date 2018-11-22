<template>
    <div>
        <my-header :title="title" :left="flag"></my-header>
        <div class="my-acticle isheader">
            <div v-if="list">
                <div class="title">
                    <p>{{list.title}}</p>
                    <i class="icon iconfont icon-icon-time"></i>
                    <span>{{list.time}}</span>
                </div>
                <div class="content" v-html="list.content">
                    {{list.content}}
                </div>
            </div>
           <empty v-if="isEmpty"></empty>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import Empty from '@/components/Empty';

export default {
    data() {
        return {
            newstype: ['公司简介','公司文化','公司背景','分支机构','促销活动','健康知识','运动加油站','成功案例','关注的问题','健康厨房'],
            title: '',
            flag: true,
            isEmpty: false,
            list: ''
        }
    },
    computed:{
     
    },
    created() {
      var self = this;
      var id = this.$route.query.id;
      this.title = this.$route.query.title;
      this.$store.dispatch('getCompanyProfile', self.title).then(function(){
        self.list2();
        if(!self.list){
          self.isEmpty = true;
        }
      })
    },
    methods: {
      list2(){
        
        switch(this.title){
          case this.newstype[0]:
          return this.list = this.$store.getters.getCompanyProfile[0];
          
          case this.newstype[1]:
          return this.list = this.$store.getters.getCompanyCulture[0];

          case this.newstype[2]:
          return this.list = this.$store.getters.getCompanyBackground[0];

          case this.newstype[3]:
          return this.list = this.$store.getters.getCompanyBranch[0];

        }
        
        
      }
    },
    components: { MyHeader,Empty}
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
