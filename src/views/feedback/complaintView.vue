<template>
    <div class="isheader">
        <my-header :left="true" :title="title"></my-header>
        <div class="content-h">
            <textarea name="" id="" cols="30" rows="10" placeholder="请输入意见反馈" v-model="content"></textarea>
            <mt-button type="primary"  class="bottom-btn middle-large" @click="submit">确认</mt-button> 
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import StarEval from '@/components/StarEvaluation'
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            title: '投诉',
            content: '',
            star: '0',
            lx: '3'
        }
    },
    methods: {
       submit(){
          var self = this;
          if(this.content){
            this.$store.dispatch('getCustomerF',{score: self.star, content: self.content, lx: self.lx}).then(function(){
              Toast({
                message: '评价'+self.$store.getters.getCustomerF,
                duration: 2500
              });
              self.$router.push({name: 'feedBackView'});
            })
          }else if(!this.content){
            Toast({
              message: '请输入意见反馈',
              duration: 2500
            });
          }
        }
    },
    components:{ MyHeader, StarEval }
}
</script>

<style lang="scss" scoped>
.content-h{
   min-height: 7.6rem;
   widows: 100%;
   padding: 0.2rem;
   box-sizing: border-box;
   position: relative;
   .margin-b-50{
       margin-bottom: 0.5rem;
   }
   p{
       line-height: 0.6rem;
   }
   textarea{
       width: 100%;
       height: 2.6rem;
       border: 1px solid #dedede;
       padding: 0.2rem;
       box-sizing: border-box;
   }
}
</style>

