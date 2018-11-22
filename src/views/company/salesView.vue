<template>
    <div class="isnav">
        <my-list :list="list" :listRightPic="true" listRightPicLink="salesDeView" v-if="list"></my-list>
    </div>
</template>

<script>
import MyList from '@/components/MyList'
export default {
    data() {
        return {
            isEmpty: false,
            list: '',
            // list: [
            //     {
            //         img: 'http://img.hb.aicdn.com/9041fee190e1e20dd08caad6f1ebe78cdd45fb181d67ed-D7j13G_fw658',
            //         title: '五一大放送，欢迎免费咨询',
            //         time: '2017-02-11',
            //         id: '123'
            //     },
            //     {
            //         img: 'http://img.hb.aicdn.com/4cd19fa3fdb0dc5fc9a027695c7b3a1527a1e9ff118c6e-Ks9PYe_fw658',
            //         title: '现办理套餐，享折上折，半折优惠再打八折，优惠多多',
            //         time: '2017-02-11',
            //         id: '123'
            //     }
            // ]
        }
    },
    created() {
      var self = this;
      this.$store.dispatch('getCompanyProfile', '促销活动').then(function(){
        self.list = self.$store.getters.getSalesActivity
        if(!self.list){
          self.isEmpty = true;
        }
      })
    },
    components: { MyList }
}
</script>

<style>

</style>
