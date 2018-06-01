<template>
    <el-header class="my-header">
        <div class="left">
            <i class="el-icon-arrow-left" v-show="left" @click="$router.go(-1)"></i>
        </div>
        <div class="center">
            <span>{{title}}</span>
        </div>
        <div class="right">
            <slot name="message"></slot>
        </div>
    </el-header>
</template>

<script>
export default {
    name: 'my-header',
    props: [ 'title', 'left'],
    methods: {
      
    }
}
</script>

<style lang="scss" scoped>
   .my-header{
       position: fixed;
       top: 0;
       left: 0;
       display: flex;
       flex-flow: row nowrap;
       align-items: center;
       .left{
           flex: 1;
           font-size: 50px;
       }
       .center{
           flex: 6;
           font-size: 32px;
           text-align: center;
       }
       .right{
           flex: 1;
           text-align: right;
           padding-right: 10px;
       }
   }
</style>
