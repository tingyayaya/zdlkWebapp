<template>
    <div class="home-list-view">
        <my-header :title="title" :left="true"></my-header>
        <div class="bg-grey padding-t-b-20 myhome-list">
            <div class="section-h">
                <div class="nav">
                    <p>最新体重</p>
                </div>
                <div class="part-content bg-white">
                    <div class="part contact"> 
                        <p>{{yesterdayDif}}</p>
                        <span>比昨天轻（kg）</span>
                        <div class="division"></div>
                    </div>
                    <div class="part contact">
                        
                        <p>{{initDif}}</p>
                        <span>比初始体重轻（kg）</span>
                    </div>
                </div>
                <div class="two-block">
                    <span class="yellow-block">本周减重目标{{weekTarget}}kg</span>
                    <span class="green-block">本月减重目标{{monthTarget}}kg</span>
                </div>
            </div>
            <div class="no-data" v-show="list.length==0"><i class="icon-z icon-z-nolist"></i><p>您还没有体重记录</p></div>
            <ul>
                <li v-for="item in list">
                    <div class="card-h"><span>{{item.time}}</span></div>
                    <div class="card-m">
                        <p>{{item.value}}</p>
                        <div class="img-list">
                           <div class="img" v-for="urlddd in item.imgs" :style="{ backgroundImage: 'url('+urlddd+')'}"></div>
                        </div>
                    </div>
                    <div class="card-b">
                        营养师评价:{{item.evaluation=="" ? "暂无评价":item.evaluation}}
                    </div>
                </li>
            </ul>
            <div class="more" v-show="list.length!=0">
                <mt-button type="default" class="round-btn" @click="handleMore">查看更多</mt-button>
                <mt-button type="default" class="round-btn" @click="handleCurve">查看曲线</mt-button>
            </div>
        </div>
        <mt-button type="primary" class="fixed-btn-b" @click="handleRecord">记体重</mt-button>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'

export default {
    data() {
        return{
            yesterdayDif: '0.0',
            initDif: '0.0',
            monthTarget: '1',
            weekTarget: '5',
            title: '我的体重',
            list: [        //最近一条的数据
                {
                    sortType: '中餐前',
                    time: '2018-03-09',
                    content: '',
                    value: '52.0kg',
                    imgs: ['http://img.hb.aicdn.com/df75487fbc3ad89bb0c42eee053c3fd2fdc6b18a12b99-qYfZrA_fw658'],
                    evaluation: '继续加油'
                }
            ]
        }
    },
    methods:{
        handleRecord(){
            this.$router.push({name:'recordWeightView'})
        },
        handleCurve(){
            this.$router.push({name:'weightCurveView'})
        },
        handleMore(){
            this.$router.push({name:'weightMoreView'})
        }
    },
    components: { MyHeader }
}
</script>

<style lang="scss" scoped>

.bg-grey{
    background-color:#f8f8f8;
}
.bg-white{
background-color:#fff;
}
.bg-padding-t{
    padding-top:88px;
}
.bg-padding-b{
    padding-bottom:68px;
}
.padding-t-b-20{
   padding:108px 0 88px 0;
}
.padding-t-20{
   padding-top: 108px;
}
$border1: 1px solid #dedede;

.home-list-view{
    height: 100%;
    background: #f8f8f8;
    
    .no-data{
       width: 100%;
       text-align: center;
       i{
           margin-top: 100px;
       }
       p{
           color: #4C4C4C;
           font-size: 24px;
           line-height: 50px;
       }
    }
 
    ul{
        li{
            width: 100%;
            background-color:#fff;
            border-top: $border1;
            border-bottom: $border1;
            margin-bottom: 20px;
            padding-left: 20px;
            box-sizing: border-box;
            font-size: 28px;
            .card-h, .card-b{
                padding: 10px 0;
            }
            .card-h{
                display: flex;
                border-bottom: $border1;
                span{
                  flex: 1;
                  font-size: 24px;
                  color: #888888;
                }
                span:nth-child(2){
                   text-align: right;
                   padding-right: 20px;
                }
            }
            .card-m{
                border-bottom: $border1;
                padding-top:10px;
                .img-list{
                    display: flex;
                    flex-flow: row wrap;
                    .img{
                        width: 80px;
                        height: 80px;
                        border: $border1;
                        background-size: cover;
                        background-position: center center;
                        background-repeat: no-repeat;
                        display: inline-block;
                        margin:0 20px 20px 0;
                    }
                }
                // padding:20px 0;
                p{
                    line-height: 50px;
                    margin-bottom:10px;
                }
                
            }
        }
    }
    .more{
        width: 86%;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        padding: 20px 0;
    }
}

.border-t-20{
    border-bottom: 20px solid #f8f8f8;
}
.border-b-1{
    border-bottom: 1px solid #f1f1f1;
}
.border-l-6{
    border-left: 6px solid #AACB3C;
}
.section-h{
        @extend .border-t-20;
        .nav{
            height: 30px;
            padding: 15px 20px;
            background-color:#fff;
            p{
                height: 100%;
                @extend .border-l-6;
                padding-left: 22px;
                font-size: 20px;
                line-height: 30px;
            }
        }
        .two-block{
            width:100%;
            height: 60px;
            display: flex;
            text-align: center;
            line-height: 60px;
            .yellow-block{
                flex:1;
                height: 60px;
                background: #F9BA17;
                color: #fff;
                font-size: 24px;
            }
            .green-block{
                flex:1;
                height: 60px;
                background: #AACB3C;
                color: #fff;
                font-size: 24px;
            }
        }
        .part-content{
            display: flex;
            flex-flow: row nowrap;
            .part{
                flex:1;
                justify-content: space-around;
                text-align: center;
                padding:20px 0;
                position: relative;
                p{
                    font-size: 64px;
                }
                
                &.contact{
                    text-align: left;
                    padding-left: 60px;
                    span{
                       font-size: 20px;
                    }
                }
                .division{
                    position: absolute;
                    display: inline-block;
                    width: 1px;
                    height: 40px;
                    background: #979797;
                    top: 50%;
                    left:100%;
                    transform: translateY(-50%);
                }
                .box{
                    border: 1px solid #dedede;
                    width: 185px;
                    height: 126px;
                    margin: 0 auto;
                }
            }
            
        }
    }
</style>

