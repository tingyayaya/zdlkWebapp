<template>
    <i class="icon-z " :class="star ? 'icon-z-star':'icon-z-unstar'"  @click="starToggle"></i>
</template>

<script>
export default {
    name: 'collect-like',
    data() {
        return {
            star: true
        }
    },
    methods: {
        starToggle() {
            this.star = ! this.star;
            if(this.star){
            this.$message({
                    type: 'success',
                    message: '收藏成功',
                    center: true
                });
            }else{
                this.$message({
                    type: 'success',
                    message: '取消收藏',
                    center: true
                });
            }
            
        }
    },
}
</script>

<style>

</style>
