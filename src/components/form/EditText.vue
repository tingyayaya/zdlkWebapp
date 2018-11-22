<template>
    <div class="isheader">
        <ul class="edit-div">
            <li>
                <slot name="unit"></slot>
                <input type="text" v-model="message" v-on:input = "getValue" :placeholder="'请输入'+title">
            </li>
        </ul>
        <p slot="error" class="errorTip" v-show="isShow">请输入{{title}}</p>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import { Toast } from 'mint-ui';

export default {
    name: 'edit-text',
    components: { MyHeader },
    data() {
        return {
            title: '',
            flag: true,
            message: '',
            isShow: false
        }
    },
    methods: {
        getValue(){
            
        },
        submit() {
            console.log(this.message)
            var val  = this.checkNull();
            if(val){
                Toast({
                    message: '请输入'+this.title,
                    position: 'center',
                    duration: 2500
                });
            }else{
                this.$emit('inputV', this.message)
            }
        },
        checkNull() {
            return this.message =='';
        }
    },
    created() {
        this.title = this.$route.query.title;
        this.message = this.$route.query.content;
    }
}
</script>

<style lang="scss" scoped>

.edit-div{
    width: 100%;
    background: #fff;
    margin-top: 0.2rem;
    border-bottom: 1px solid #dedede;
    border-top: 1px solid #dedede;
    font-size: 0.26rem;
    li{
        padding: 1px 0px 1px 0.2rem;
        display: flex;
        height: 0.68rem;
        input[type=text]{
            padding: 0.16rem 0;
            height: 0.66rem;
            box-sizing: border-box;
            width: 100%;
            font-size: 0.26rem;
        }
    }
}
.errorTip{
    padding: 0.1rem 0.2rem;
    color: #F47340;
    font-size: 0.24rem;
}
 
</style>
