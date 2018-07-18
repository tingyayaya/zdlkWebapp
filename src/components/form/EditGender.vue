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
    margin-top: 20px;
    border-bottom: 1px solid #dedede;
    border-top: 1px solid #dedede;
    font-size: 28px;
    li{
        padding: 1px 0px 1px 20px;
        display: flex;
        flex-flow: column wrap;
        p{
            line-height: 66px;
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
                right: 20px;
            }
        }
        p+p{
            border-top: 1px solid #dedede;
        }
    }   
    
}
.errorTip{
    padding: 10px 20px;
    color: #F47340;
    font-size: 24px;
}
 
</style>
