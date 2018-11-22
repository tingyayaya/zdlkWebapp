<template>
    <div class="company-view">
        <my-header :title="title" :left="flag"></my-header>
        <search-bar path2="cookSearchView"></search-bar>
        <my-nav :list="navlist" @tabchange = "listChild ($event)" :ishassearch='true'></my-nav>
        <my-list :list="list" :listRightPic="true" listRightPicLink="cookDeView" class="hasnavsearch"></my-list>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import MyNav from '@/components/MyNav';
import MyList from '@/components/MyList';
import SearchBar from '@/components/SearchBar';

export default {
    components: { MyNav, MyHeader, MyList, SearchBar},
    data() {
        return {
            title: '健康厨房',
            flag: true,
            navlist: [],
            list: []
        }
    },
    created(){
      var self = this;
      this.$store.dispatch('getCookiesSorts').then(function(){
        self.navlist = self.$store.getters.getCookiesSorts;
        if(self.navlist.length){
          self.$store.dispatch('getArticle', {'lx':'健康厨房', 'fl': self.navlist[0].name}).then(function(){
            self.list = self.$store.getters.getArticle
          })
        }
      })
      
    },
    methods: {
       listChild(e) {
        var self = this;
        self.$store.dispatch('getArticle', {'lx':'健康厨房', 'fl': e.name}).then(function(){
          self.list = self.$store.getters.getArticle
        })
      }
    }
}
</script>

<style scoped lang="scss">
.el-main{
    padding: 0;
}
.hasnavsearch{
    padding-top: 2.54rem;
}
</style>
