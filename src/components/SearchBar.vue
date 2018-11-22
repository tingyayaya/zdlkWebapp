<template>
    <div class="search-bar">
        <form action="#" @submit="doSubmit">
            <input type="search" autocomplete="off" placeholder="请输入关键词" @input="hasMessage" v-model="message" required @keyup.enter="search(path2)">
        </form>
        <i class="icon iconfont icon-search" v-show="!message"></i>
        <i class="el-icon-error" v-show="isclose" @click="clear"></i>
    </div>
</template>

<script>
export default {
    name: 'search-bar',
    data() {
        return {
           isclose: false,
           message: ''
        }
    },
    props: {
        path2: String
    },
    methods: {
        hasMessage() {
            return this.message === '' ? this.isclose = false : this.isclose = true;
        },
        clear() {
           this.message = '';
           this.isclose = false;
        },
        search(name) {
           this.$router.push({ name: name, query: { content: this.message} })
           this.$emit('searchUp', this.message)
        },
        doSubmit(e) {
            e.preventDefault();
        }
    },
    created() {
       this.message = this.$route.query.content;
    }
}
</script>

<style lang="scss" scoped>
.search-bar{
    background-color: #f6f6f6;
    width: 100%;
    height: 0.88rem;
    padding: 0.15rem 0.2rem;
    box-sizing: border-box;
    z-index: 999;
    position: fixed;
    top:0.88rem;
    input[type=search] {
        width: 100%;
        height: 0.58rem;
        border-radius: 0.04rem;
        border: 0;
        text-align: center;
        -webkit-appearance: none;
        font-size: 0.26rem;
    }
    input[type=search]::-webkit-search-cancel-button{
        -webkit-appearance: none;//此处只是去掉默认的小×
    }
    input[type=search]::-webkit-input-placeholder{
        color: #b6b6b6;
    }
    .icon-search{
        position: absolute;
        left:32%;
        top: 0.32rem;
        color:#b6b6b6;
        font-size: 0.28rem;
    }
    .el-icon-error{
        position: absolute;
        right: 0.4rem;
        top: 0.32rem;
        color:#b6b6b6;
    }
}
</style>
