<template>
    <el-container class="page-view isheader isfooter">
        <router-view></router-view>
        <my-footer></my-footer>
    </el-container>
</template>

<script>

import MyFooter from '../components/MyFooter'

export default {
   name: 'page-view',
   components: { MyFooter },
}
</script>

<style>

</style>
