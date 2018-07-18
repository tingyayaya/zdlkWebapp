<template>
    <div class="home-view isfooter">
        <my-header :title="title" :left="flag" @getMessage = "message">
            <router-link :to="{name: 'messageView'}" slot="message" class="msg-icon">
                <i :class="{ 'new-active':isnews }"></i>
                <i class="icon iconfont icon-news"></i>
            </router-link>
        </my-header>
        <message mymsg="msgFirst"></message>
        <div class="section-h">
            <router-link  :to="{ name: 'foodListView'}" class="btn">
                <mt-button type="primary"  class="medium">查看往期饮食记录</mt-button>
            </router-link>
        </div>
        <div class="section-h">
            <div class="nav">
                <p>您的曲线</p>
            </div>
            <div class="part-content line">
                <div class="part">
                    <router-link :to="{name: 'weightCurveView'}"> 
                        <div class="box">
                            <i class="icon-l icon-l-chart1"></i>
                        </div>
                        <p>体重</p>
                    </router-link>
                </div>
                <div class="part"> 
                    <router-link :to="{name: 'sugarCurveView'}">
                        <div class="box">
                            <i class="icon-l icon-l-chart2"></i>
                        </div>
                        <p>血糖</p>
                    </router-link>
                </div>
                <div class="part"> 
                    <router-link :to="{name: 'urineCurveView'}">
                        <div class="box">
                            <i class="icon-l icon-l-chart3"></i>
                        </div>
                        <p>尿酮</p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="section-h">
            <div class="nav">
                <p>您的记录</p>
            </div>
            <div class="ispart-line part-content">
                <div class="part"> 
                    <router-link :to="{name: 'weightListView'}">
                        <div>
                            <i class="icon-z icon-z-my-weight"></i>
                        </div>
                        <p><span>50</span>kg</p>
                        <span>2018-03-24</span>
                    </router-link>
                </div>
                <div class="part"> 
                    <router-link :to="{name: 'sugarListView'}">
                        <div><i class="icon-z icon-z-blood-sugar"></i></div>
                        <p><span>6.0</span>mmol/L</p>
                        <span>2018-03-24</span>
                    </router-link>
                </div>
                <div class="part"> 
                    <router-link :to="{name: 'urineListView'}">
                        <div><i class="icon-z icon-z-urine"></i></div>
                        <p><span>4+</span></p>
                        <span>2018-03-24</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="section-h">
            <div class="nav">
                <p>您的专职营养师</p>
            </div>
            <div class="ispart-line part-content">
                <div class="part contact"> 
                    <p>诸葛亮</p>
                    <span>专职营养师</span>
                </div>
                <div class="part contact"> 
                    <p>1352222215</p>
                    <span>手机</span>
                </div>
                <div class="part contact"> 
                    <p>1352222215</p>
                    <span>健康热线</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import Message from '../components/Message'

export default {
    components: { MyHeader, Message },
    data() {
       return {
           title: '首页',
           flag: false,
           isnews: true
       }
   },
   methods: {
       message(data){
           console.log(data);
       }
   }
}
</script>

<style lang="scss">
.border-t-20{
    border-bottom: 20px solid #f8f8f8;
}
.border-b-1{
    border-bottom: 1px solid #f1f1f1;
}
.border-l-6{
    border-left: 6px solid #AACB3C;
}
.home-view {
    width: 100%;
   
    .section-h{
        @extend .border-t-20;
        .btn{
            width: 100%;
            display: block;
            text-align: center;
            margin-bottom: 50px;
        }
        .nav{
            height: 20px;
            @extend .border-b-1;
            padding: 15px 20px;
            p{
                height: 20px;
                @extend .border-l-6;
                padding-left: 10px;
                font-size: 20px;
                line-height: 20px;
            }
        }
        .part-content{
            display: flex;
            flex-flow: row nowrap;
            &.line{
                .part{
                    p{
                        font-size: 28px;
                        margin-top: 10px;
                    }
                }
            }
            .part{
                flex:1;
                justify-content: space-around;
                text-align: center;
                padding:20px 0;
                span{
                    font-size: 24px;
                    color: #737373;
                    line-height: 50px;
                }
                p{
                    font-size: 20px;
                    span{
                        font-size: 36px;
                        color: #000;
                    }
                }
                &.contact{
                    text-align: left;
                    padding-left: 20px;
                    p{
                        color: #5B873C;
                        font-size: 28px;
                    }
                }
                .box{
                    border: 1px solid #dedede;
                    width: 185px;
                    height: 126px;
                    margin: 0 auto;
                }
            }
            &.ispart-line {
                .part+.part{
                    border-left: 1px solid #f1f1f1;
                }
            }
        }
    }
    .msg-icon{
        position: relative;
        .icon-news{
            font-size: 36px;
        }
        .new-active{
            width: 12px;
            height: 12px;
            background-color: #F47340;
            border-radius: 5px;
            display: block;
            position: absolute;
            right: 0;
            top: -2px;
        }
    }
}
</style>
