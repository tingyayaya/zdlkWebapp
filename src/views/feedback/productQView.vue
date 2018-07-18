<template>
    <div class="isheader">
        <my-header :left="true" :title="title"></my-header>
        <div class="content-h">
            <textarea name="" id="" cols="30" rows="10" placeholder="请输入产品建议"></textarea>
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
            title: '产品建议'
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
   min-height: 760px;
   widows: 100%;
   padding: 20px;
   box-sizing: border-box;
   position: relative;
   .margin-b-50{
       margin-bottom: 50px;
   }
   p{
       line-height: 60px;
   }
   textarea{
       width: 100%;
       height: 260px;
       border: 1px solid #dedede;
       padding: 20px;
       box-sizing: border-box;
   }
}
</style>

