<template>
    <div class="userinfo-view">
        <my-header :title="title" :left="false">
          <router-link :to="{ name: 'mineView' }" slot="otherleft">
            <i class="icon-z icon-z-arrow-left"></i>
          </router-link>
        </my-header>
        <div class="my-list-space isheader">
            <ul>
                <li class="text">
                    <label for="">姓名</label>
                    <span>{{list.name}}</span>
                </li>
                <li>
                    <router-link :to="{name:'editInfoView', query:{ title:'手机号', content: list.tel, type: 'tel'}}">
                    <label for="">手机号</label>
                    <span><span>{{list.tel}}</span> <i class="icon iconfont icon-list-right"></i> </span>
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
          userInfoState: JSON.parse(localStorage.getItem('userInfoState')).userInfoState,
          title: '账户信息',
          flag: true,
          list:{
              name: '',
              tel: '',
          }
        }
    },
    created() {
      this.$store.dispatch('getInfo').then(() => {
        console.log(this.$store.getters.getInfo)
        this.list =  this.$store.getters.getInfo
      })
    },
    methods: {
        submit() {
            console.log(1);
        },
        loginOut() {
            var self = this;
            MessageBox.confirm('您确认要退出么?').then(action => {
               localStorage.removeItem('userInfoState');
                self.$router.push({name: 'loginView'})
            })
            .catch(()=>{
                //防止取消操作报错
            });
        },
        getData() {
         
        }
    }
}
</script>

<style lang="scss" scoped>
.userinfo-view{
    height: 100%;
    background: #f8f8f8;
}
.my-list-space{
    ul{
        width: 100%;
        background: #fff;
        padding-left: 0.2rem;
        margin-top: 0.2rem;
        border-bottom: 1px solid #dedede;
        border-top: 1px solid #dedede;
        box-sizing: border-box;
        li+li{
                border-top: 1px solid #dedede;
            }
        li{
            line-height: 0.78rem;
            &.text{
              display: flex;
              span{
                 margin-right: 0.3rem;
              }
            }
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
                  font-size: 0.26rem;
                  margin-right: 0.2rem;
                }
            }
        }
        li.login-out{
            text-align: center;
        }
    }
}
</style>
