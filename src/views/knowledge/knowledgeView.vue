<template>
    <div class="company-view">
        <my-header :title="title" :left="flag">
            <router-link :to="{name: 'healthView'}" slot="otherleft">
                 <i class="icon-z icon-z-arrow-left"></i>
            </router-link>
        </my-header>
        <my-nav :list="navlist" @tabchange = "listChild ($event)" v-if="navlist"></my-nav>
        <my-list :list="list" :listRightPic="true" listRightPicLink = "knowledgeDeView" class="isnav" v-if="list"></my-list>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import MyNav from '@/components/MyNav';
import MyList from '@/components/MyList';

export default {
    components: { MyNav, MyHeader, MyList},
    data() {
        return {
            title: '健康知识',
            flag: false,
            isEmpty: false,
            navlist: [],
            list: []
        }
    },
    created(){
      var self = this;
      this.$store.dispatch('getKnowledgeSorts').then(function(){
        self.navlist = self.$store.getters.getKnowledgeSorts;
        if(self.navlist.length){
          self.$store.dispatch('getArticle', {'lx':'健康知识', 'fl': self.navlist[0].name}).then(function(){
            self.list = self.$store.getters.getArticle
          })
        }
      })
    },
    methods: {
      listChild(e) {
        var self = this;
        self.$store.dispatch('getArticle', {'lx':'健康知识', 'fl': e.name}).then(function(){
          self.list = self.$store.getters.getArticle
        })
      }
    }
}
</script>

<style scoped>

.el-main{
    padding: 0;
}

</style>
