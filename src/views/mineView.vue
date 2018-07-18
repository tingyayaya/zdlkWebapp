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

export default {
     components: { MyHeader},
     data() {
       return {
         flag: false,
         isComfirm: 0,
         title: '我的',
         user: {
           name :'诸葛亮',
           codeimg: 'https://qr.api.cli.im/qr?data=who%2Bam%2BI&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=&blockpixel=12&marginblock=2&logourl=&size=400&text=&logoshape=&fontsize=30&fontfamily=msyh.ttf&fontcolor=%23000000&incolor=&outcolor=&qrcode_eyes=&background=&wper=0&hper=0&tper=0&lper=0&eye_use_fore=1&qrpad=10&kid=bizcliim&time=1528265230&key=a2b3d065aaed64d2c2b01ff1ae53e623'
         }
       }
     },
     created(){
       this.getState();
     },
     methods: {
       //协议是否确认
       getState() {
        var self = this;
        this.$axios({
          methods: 'post',
          url: '/select_protocolstatue.jsp',
          params: {
            token: self.MYTOKEN,
            'SKT123.SKF1934': sessionStorage.tel
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
    height: 260px !important;
    background: #fff url(../assets/imgs/header-bg.png) no-repeat;
    background-size: 640px auto;
    overflow: hidden;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 998;
    padding-top: 88px;
    box-sizing: border-box;
    border-bottom: 1px solid #FFFAAE;
  .head-info {
     display: flex;
     flex-flow: row nowrap;
     padding: 40px 0;
     font-size: 30px;

     .left {
       flex: 2;
       padding-left: 60px;
       p{
         line-height: 50px;
       }
       .icon-head-user{
         font-size: 30px;
         color: #EBAD0A;
       }
       .icon-list-right{
         margin-left: 80px;
       }
       .small{
         color: #6a6a6a;
         font-size: 24px;
       }
     }

     .right {
        flex: 1;
        text-align: center;
        img{
          width: 84px;
          height: 84px;
          margin-top: 10px;
        }
     }

  }
}

.mine-view{
    flex: 1;
    background: #f8f8f8;
    height: 100%;
    padding: 0;
    padding-bottom: 120px;
    .icon-head-set{
        font-size: 36px;
    }
    ul{   
        padding: 0;
        padding-top: 172px;
        padding-bottom: 120px;
        font-size: 28px;
        li{
            padding-left: 20px;
            box-sizing: border-box;
            border-bottom: 1px solid #dedede;
            border-top: 1px solid #dedede;
            margin-top: 20px;
            background-color:#fff;
            .small-text{
                font-size:24px; 
                color:#888;
            }
            a+a{
                    border-top: 1px solid #dedede;
            }
            i{
                margin-right: 10px;
                font-size: 30px;
            }
            a{
                width: 100%;
                height: 100%;
                display: inline-block;
                line-height: 68px;
                position: relative;
            }
            a:active{
                background: #f8f8f8;
            }
            .icon-list-date{
                color: #AACB3C;
            }
            .icon-list-poto{
                font-size: 26px;
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
                font-size: 26px;
                position: absolute;
                right: 20px;
            }
        }
    }
 
}
</style>
