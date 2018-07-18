<template>
    <div class="page-view isheader isfooter backgroundd">
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>

import MyFooter from '../components/MyFooter'

export default {
   name: 'page-view',
   components: { MyFooter },
}
</script>

<style>
   .page-view{
       height: 100%;
       box-sizing: border-box;
   }
</style>
