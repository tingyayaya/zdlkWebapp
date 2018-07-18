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
    height: 88px;
    padding: 15px 20px;
    box-sizing: border-box;
    z-index: 999;
    position: fixed;
    top:88px;
    input[type=search] {
        width: 100%;
        height: 58px;
        border-radius: 4px;
        border: 0;
        text-align: center;
        -webkit-appearance: none;
        font-size: 26px;
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
        top: 32px;
        color:#b6b6b6;
        font-size: 28px;
    }
    .el-icon-error{
        position: absolute;
        right: 40px;
        top: 32px;
        color:#b6b6b6;
    }
}
</style>
