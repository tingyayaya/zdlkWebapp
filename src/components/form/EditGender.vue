<template>
    <div class="isheader">
        <my-header :title="title" :left="true">
            <span slot="save" @click="submit">完成</span>
        </my-header>
        <ul class="edit-div">
            <li>
                <p :class="{active: item.value==message}" @click="getSelect(item.value)" v-for="(item, key) in option">{{item.name}}<i class="icon iconfont icon-select"></i> </p>
            </li>
            
        </ul>
        <p slot="error" class="errorTip" v-show="isShow">请输入{{title}}</p>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'

export default {
    name: 'edit-gender',
    components: { MyHeader },
    data() {
        return {
            title: '',
            flag: true,
            message: '1',
            isShow: false,
            option: [
                {
                    name: '男',
                    value: 1
                },{
                    name: '女',
                    value: 0
                }
            ]
        }
    },
    methods: {
        getValue(){
            this.$emit('inputV', this.message)
        },
        submit() {
            console.log(this.message)
        },
        getSelect(val) {
            this.message = val;
            //console.log(this.message);
        }
    },
    created() {
        this.title = this.$route.query.title;
        this.message = this.$route.query.content=='女' ? 0 : 1;
        console.log(this.message);
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
        padding: 1px 0rem 1px 0.2rem;
        display: flex;
        flex-flow: column wrap;
        p{
            line-height: 0.66rem;
            position: relative;
            cursor: pointer;
            &.active{
                .icon-select{
                    color: #F47340;
                }
            }
            .icon-select{
                color:transparent;
                position: absolute;
                right: 0.2rem;
            }
        }
        p+p{
            border-top: 1px solid #dedede;
        }
    }   
    
}
.errorTip{
    padding: 0.1rem 0.2rem;
    color: #F47340;
    font-size: 0.24rem;
}
 
</style>
