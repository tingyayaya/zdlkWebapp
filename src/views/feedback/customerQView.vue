<template>
    <div class="isheader">
        <my-header :left="true" :title="title"></my-header>
        <div class="content-h">
            我是满意度调查
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import StarEval from '@/components/StarEvaluation'

export default {
    data() {
        return {
            title: '满意度调查'
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


