<template>
    <div class="mine-view">
      <my-header :left="flag" :title="title"></my-header>
      <div class="myheader2">
           <div class="head-info">
                <div class="left">
                    <router-link :to="{ name: 'userInfoView'}">
                        <p> <i class="icon iconfont icon-head-user"></i> {{user.name}} </p>
                        <p class="small"> 账户信息<i class="icon iconfont icon-list-right"></i> </p>
                    </router-link>
                </div>
                <div class="right">
                    <router-link :to="{ name: 'myCodeView'}">
                        <img :src="user.codeimg" alt="">
                    </router-link>
                </div>
           </div>
      </div>
      <ul>
        <li>
        <router-link :to="{ name: 'personDataView' }">
            <i class="icon iconfont icon-list-user"></i>
            <span>个人资料</span>
            <i class="icon iconfont icon-list-right"></i>
        </router-link>
        <router-link :to="{ name: 'myCollectView' }">
            <i class="icon iconfont icon-list-collect"></i>
            <span>我的收藏</span>
            <i class="icon iconfont icon-list-right"></i>
        </router-link>
        </li>
        <li>
        <router-link :to="{ name: 'myReportView' }">
            <i class="icon iconfont icon-list-report"></i>
            <span>我的体检报告</span>
            <i class="icon iconfont icon-list-right"></i>
        </router-link>
        <router-link :to="{ name: 'myCompPicView' }">
            <i class="icon iconfont icon-list-poto"></i>
            <span>我的对比照</span>
            <i class="icon iconfont icon-list-right"></i>
        </router-link>
        </li>
        <li>
        <router-link :to="{ name: 'reminderView' }">
            <i class="icon iconfont icon-list-date"></i>
            <span>日程提醒</span>
            <i class="icon iconfont icon-list-right"></i>
        </router-link>
        <router-link :to="{ name: 'recordView' }">
            <i class="icon iconfont icon-list-write"></i>
            <span>记录</span>
            <i class="icon iconfont icon-list-right"></i>
        </router-link>
        </li>
        <li>
        <router-link :to="{ name: 'agreementView' }">
            <i class="icon iconfont icon-list-deal"></i>
            <span>协议与说明</span>
            <span class="small-text">{{isComfirm==0 ? '未确认':'已确认'}}</span>
            <i class="icon iconfont icon-list-right"></i>
        </router-link>
        <router-link :to="{ name: 'feedBackView' }">
            <i class="icon iconfont icon-list-opinion"></i>
            <span>意见反馈</span>
            <i class="icon iconfont icon-list-right"></i>
        </router-link>
        </li>
     </ul>
       
    </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import {mapState} from 'vuex'

export default {
     components: { MyHeader},
     data() {
       return {
         userInfoState: JSON.parse(localStorage.getItem('userInfoState')).userInfoState,
         flag: false,
         isComfirm: 0,
         title: '我的',
       }
     },
     computed: {
       user(){
        return this.$store.getters.getInfo;
       }
     },
     created(){
       this.$store.dispatch('getInfo');
       this.getState();
     },
     methods: {
       //协议是否确认
       getState() {
        var self = this;
        this.$axios({
          methods: 'post',
          url: self.baseurl.viewer+'/select_protocolstatue.jsp',
          params: {
            token: '',
            'SKT123.SKF1934': self.userInfoState.tel,
          }
        })
        .then(function(res){
         
          if(res.data.code==0&&res.data.data[0]['count(skt123.skf1935)']!=0){
            self.isComfirm = 1;
          }else{
            self.isComfirm = 0;
          }
        })
      }
     }
     
}
</script>

<style lang="scss" scoped>

.myheader2{
    height: 2.6rem !important;
    background: #fff url(../assets/imgs/header-bg.png) no-repeat;
    background-size: 6.4rem auto;
    overflow: hidden;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 998;
    padding-top: 0.88rem;
    box-sizing: border-box;
    border-bottom: 1px solid #FFFAAE;
  .head-info {
     display: flex;
     flex-flow: row nowrap;
     padding: 0.4rem 0;
     font-size: 0.3rem;

     .left {
       flex: 2;
       padding-left: 0.6rem;
       p{
         line-height: 0.5rem;
       }
       .icon-head-user{
         font-size: 0.3rem;
         color: #EBAD0A;
       }
       .icon-list-right{
         margin-left: 0.8rem;
         font-size: 0.26rem;
       }
       .small{
         color: #6a6a6a;
         font-size: 0.24rem;
       }
     }

     .right {
        flex: 1;
        text-align: center;
        img{
          width: 0.84rem;
          height: 0.84rem;
          margin-top: 0.1rem;
        }
     }

  }
}

.mine-view{
    flex: 1;
    background: #f8f8f8;
    padding: 0;
    .icon-head-set{
        font-size: 0.36rem;
    }
    ul{   
        padding: 0;
        padding-top: 1.72rem;
        padding-bottom: 1.2rem;
        font-size: 0.28rem;
        li{
            padding-left: 0.2rem;
            box-sizing: border-box;
            border-bottom: 1px solid #dedede;
            border-top: 1px solid #dedede;
            margin-top: 0.2rem;
            background-color:#fff;
            .small-text{
                font-size:0.24rem; 
                color:#888;
            }
            a+a{
                    border-top: 1px solid #dedede;
            }
            i{
                margin-right: 0.1rem;
                font-size: 0.3rem;
            }
            a{
                width: 100%;
                height: 100%;
                display: inline-block;
                line-height: 0.78rem;
                position: relative;
            }
            a:active{
                background: #f8f8f8;
            }
            .icon-list-date{
                color: #AACB3C;
            }
            .icon-list-poto{
                font-size: 0.26rem;
                color: #3CC0CB;
            }
            .icon-list-collect{
                color: #F47340;
            }
            .icon-list-report{
                color: #F9BA17;
            }
            .icon-question{
                color: #CF2C4A;
            }
            .icon-list-user{
                color: #5B873C;
            }
            .icon-list-write{
                color: #F47340;
            }
            .icon-list-deal{
                color: #78AD6F;
            }
            .icon-list-opinion{
                color: #FFC633;
            }
            .icon-list-right{
                color: #b3b3b3;
                font-size: 0.26rem;
                position: absolute;
                right: 0.2rem;
            }
        }
    }
 
}
</style>
