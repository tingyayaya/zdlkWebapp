<template>
    <div class="isheader">
        <my-header :left="true" :title="title"></my-header>
        <div class="content-h">
            <textarea name="" id="" cols="30" rows="10" placeholder="请输入意见反馈" v-model="content"></textarea>
            <mt-button type="primary"  class="bottom-btn middle-large">确认</mt-button>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import StarEval from '@/components/StarEvaluation'

export default {
    data() {
        return {
            title: '其他',
            content: '',
            lx: '2'
        }
    },
    methods: {
        getScore(e) {
            console.log(e)
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

