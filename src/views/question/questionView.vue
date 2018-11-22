<template>
    <div class="company-view">
        <my-header :title="title" :left="flag"></my-header>
        <search-bar path2="questionSearchView"></search-bar>
        <my-nav :list="navlist" @tabchange = "listChild ($event)" :ishassearch='true' v-if="navlist"></my-nav>
        <my-list :listRightPic="true" listRightPicLink="questionDeView" :list="list" class="hasnavsearch" v-if="list"></my-list>
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
            title: '关注的问题',
            flag: true,
            navlist: [],
            list: []
        }
    },
    created(){
      var self = this;
      this.$store.dispatch('getIssueSorts').then(function(){
        self.navlist = self.$store.getters.getIssueSorts;
        if(self.navlist.length){
          self.$store.dispatch('getArticle', {'lx':'关注的问题', 'fl': self.navlist[0].name}).then(function(){
            self.list = self.$store.getters.getArticle
          })
        }
      })
    },
    methods: {
      listChild(e) {
        var self = this;
        self.$store.dispatch('getArticle', {'lx':'关注的问题', 'fl': e.name}).then(function(){
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
