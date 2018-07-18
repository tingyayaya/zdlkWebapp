<template>
    <div class="userinfo-view">
        <my-header :title="title" :left="flag"></my-header>
        <div class="my-list-space isheader">
            <ul>
                <li>
                    <router-link :to="{name:'editInfoView', query:{ title:'姓名', content: list.name, type: 'text'}}">
                        <label for="">姓名</label>
                        <span>{{list.name}} <i class="icon iconfont icon-list-right"></i> </span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'editInfoView', query:{ title:'手机号', content: list.tel, type: 'tel'}}">
                    <label for="">手机号</label>
                    <span>{{list.tel}} <i class="icon iconfont icon-list-right"></i> </span>
                    </router-link>
                </li>
            </ul>
            <ul>
                <li class="login-out" @click="loginOut">退出登录</li>
            </ul>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import { MessageBox } from 'mint-ui';

export default {
    components: { MyHeader },
    data() {
        return {
            title: '账户信息',
            flag: true,
            list:{
                name: '朱小猪',
                tel: '13522222215',
                id: '3'
            }
        }
    },
    methods: {
        submit() {
            console.log(1);
        },
        loginOut() {
            var self = this;
            MessageBox.confirm('您确认要退出么?').then(action => {
                self.$router.push({name: 'loginView'})
            })
            .catch(()=>{
                //防止取消操作报错
            });
        }
    }
}
</script>

<style lang="scss">
.userinfo-view{
    height: 100%;
    background: #f8f8f8;
}
.my-list-space{
    ul{
        width: 100%;
        background: #fff;
        padding-left: 20px;
        margin-top: 20px;
        border-bottom: 1px solid #dedede;
        border-top: 1px solid #dedede;
        box-sizing: border-box;
        li+li{
                border-top: 1px solid #dedede;
            }
        li{
            line-height: 66px;
            
            a{
               display: flex;
            }
            label{
                flex:1;
            }
            span{
                color: #888;
                flex: 2;
                text-align: right;
                i{
                    margin-right: 10px;
                }
            }
        }
        li.login-out{
            text-align: center;
        }
    }
}
</style>
