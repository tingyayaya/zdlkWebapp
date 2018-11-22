<template>
    <header class="my-header">
        <div class="left">
            <i class="icon-z icon-z-arrow-left" v-show="left" @click="$router.go(-1)"></i>
            <slot name="otherleft"></slot>
        </div>
        <div class="center">
            <span>{{title}}</span>
        </div>
        <div class="right">
            <slot name="message"></slot>
            <slot name="stars"></slot>
            <slot name="set"></slot>
            <slot name="save"></slot>
            <slot name="upload"></slot>
            <slot name="record"></slot>
        </div>
    </header>
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
header{
    height: 0.88rem !important;
    background: #fff url(../assets/imgs/header-bg.png) no-repeat;
    background-size: 100% auto;
    overflow: hidden;
    width: 100%;
}
   .my-header{
       position: fixed;
       top: 0;
       left: 0;
       display: flex;
       flex-flow: row nowrap;
       align-items: center;
       z-index: 999;
       padding: 0 0.2rem;
       box-sizing: border-box;
       font-size: 0.28rem;
       .left{
           flex: 1;
          //  font-size: 0.3rem;
           cursor: pointer;
       }
       .center{
           flex: 4;
           font-size: 0.32rem;
           text-align: center;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
       }
       .right{
           flex: 1;
           text-align: right;
           padding-right: 0.1rem;
           cursor: pointer;
       }
   }
</style>
