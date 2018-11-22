<template>
    <div class="company-view">
        <my-header :title="title" :left="flag">
            <router-link :to="{name: 'healthView'}" slot="otherleft">
                 <i class="icon-z icon-z-arrow-left"></i>
            </router-link>
        </my-header>
        <my-nav :list="navlist" @tabchange = "listChild ($event)"></my-nav>
        <my-list :list="list"  :listLeftPic="true" listLeftPicLink = "caseDeView" class="isnav"></my-list>
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
            title: '成功案例',
            isEmpty: false,
            flag: false,
            navlist: [],
            list: []
               
        }
    },
    created(){
      var self = this;
      this.$store.dispatch('getCaseSorts').then(function(){
        self.navlist = self.$store.getters.getCaseSorts;
        if(self.navlist.length){
          self.$store.dispatch('getArticle', {'lx':'成功案例', 'fl': self.navlist[0].name}).then(function(){
            self.list = self.$store.getters.getArticle
          })
        }
      })
    },
    methods: {
      listChild(e) {
        var self = this;
        self.$store.dispatch('getArticle', {'lx':'成功案例', 'fl': e.name}).then(function(){
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
