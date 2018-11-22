<template>
    <div class="home-list-view">
        <my-header :title="title" :left="true"></my-header>
       
        <div class="bg-grey padding-t-b-20 myhome-list">
           <div class="subtitle">
                    <dl>
                      <dt>最新体重:</dt>
                      <dd>{{myWeight.value? myWeight.value:'请上传体重数据'}}</dd>
                      <dd>{{myWeight.time}}</dd>
                    </dl>
                    <dl>
                      <dt>初始体重:</dt>
                      <dd>{{initWeight.value? initWeight.value:'请上传体重数据'}}</dd>
                       <dd>{{initWeight.time}}</dd>
                    </dl>
                </div>
            <div class="section-h">
                <div class="nav">
                    <p>我的体重</p>
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
                    <span class="green-block">本月减重目标{{monthTarget}}kg</span>
                    <span class="yellow-block">目前已经完成目标的{{percent}}%</span>
                </div>
            </div>
            <div class="no-data" v-if="list.length==0"><i class="icon-z icon-z-nolist"></i><p>您还没有体重记录</p></div>
            <RecodeList :list="list" v-if="list.length"></RecodeList>
            <div class="more" v-if="list.length">
                <mt-button type="default" class="round-btn" @click="handleMore">查看更多</mt-button>
                <mt-button type="default" class="round-btn" @click="handleCurve">查看曲线</mt-button>
            </div>
        </div>
        <mt-button type="primary" class="fixed-btn-b" @click="handleRecord">记体重</mt-button>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import RecodeList from '@/components/RecodeList'

export default {
    data() {
        return{
            yesterdayDif: '0.0',
            initDif: '0.0',
            monthTarget: '1',
            percent: '5',
            title: '我的体重',
            myWeight: {
              value: '50kg',
              time: '2019-06-01'
            },
            initWeight: {
              value: '50kg',
              time: '2019-04-01'
            }
        }
    },
    computed: {
      list() {
        return this.$store.getters.getRecodeList1Last;
      }
    },
    created(){
      this.$store.dispatch('getRecodeList1', 1)
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
    components: { MyHeader, RecodeList }
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
    padding-top:0.88rem;
}
.bg-padding-b{
    padding-bottom:0.68rem;
}
.padding-t-b-20{
   padding:1.08rem 0 0.88rem 0;
}
.padding-t-20{
   padding-top: 1.08rem;
}
$border1: 1px solid #dedede;
.subtitle{
  font-size: 0.22rem;
  padding: 0.1rem 0.3rem;
  dl, dd, dt{
    display: inline-block;
    font-size: 0.22rem;
    color:#4C4C4C;
  }
  dl{
    width: 49%;
  }
}
.home-list-view{
    height: 100%;
    background: #f8f8f8;
    
    .no-data{
       width: 100%;
       text-align: center;
       i{
           margin-top: 1rem;
       }
       p{
           color: #4C4C4C;
           font-size: 0.24rem;
           line-height: 0.5rem;
       }
    }
 
    ul{
        li{
            width: 100%;
            background-color:#fff;
            border-top: $border1;
            border-bottom: $border1;
            margin-bottom: 0.2rem;
            padding-left: 0.2rem;
            box-sizing: border-box;
            font-size: 0.28rem;
            .card-h, .card-b{
                padding: 0.1rem 0;
            }
            .card-h{
                display: flex;
                border-bottom: $border1;
                span{
                  flex: 1;
                  font-size: 0.24rem;
                  color: #888888;
                }
                span:nth-child(2){
                   text-align: right;
                   padding-right: 0.2rem;
                }
            }
            .card-m{
                border-bottom: $border1;
                padding-top:0.1rem;
                .img-list{
                    display: flex;
                    flex-flow: row wrap;
                    .img{
                        width: 0.8rem;
                        height: 0.8rem;
                        border: $border1;
                        background-size: cover;
                        background-position: center center;
                        background-repeat: no-repeat;
                        display: inline-block;
                        margin:0 0.2rem 0.2rem 0;
                    }
                }
                // padding:0.2rem 0;
                p{
                    line-height: 0.5rem;
                    margin-bottom:0.1rem;
                }
                
            }
        }
    }
    .more{
        width: 86%;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        padding: 0.2rem 0;
    }
}

.border-t-20{
    border-bottom: 0.2rem solid #f8f8f8;
}
.border-b-1{
    border-bottom: 1px solid #f1f1f1;
}
.border-l-6{
    border-left: 0.06rem solid #AACB3C;
}
.section-h{
        @extend .border-t-20;
        .nav{
            height: 0.3rem;
            padding: 0.15rem 0.2rem;
            background-color:#fff;
            p{
                height: 100%;
                @extend .border-l-6;
                padding-left: 0.22rem;
                font-size: 0.2rem;
                line-height: 0.3rem;
            }
        }
        .two-block{
            width:100%;
            height: 0.6rem;
            display: flex;
            text-align: center;
            line-height: 0.6rem;
            .yellow-block{
                flex:1;
                height: 0.6rem;
                background: #F9BA17;
                color: #fff;
                font-size: 0.24rem;
            }
            .green-block{
                flex:1;
                height: 0.6rem;
                background: #AACB3C;
                color: #fff;
                font-size: 0.24rem;
            }
        }
        .part-content{
            display: flex;
            flex-flow: row nowrap;
            .part{
                flex:1;
                justify-content: space-around;
                text-align: center;
                padding:0.2rem 0;
                position: relative;
                p{
                    font-size: 0.64rem;
                }
                
                &.contact{
                    text-align: left;
                    padding-left: 0.6rem;
                    span{
                       font-size: 0.2rem;
                    }
                }
                .division{
                    position: absolute;
                    display: inline-block;
                    width: 1px;
                    height: 0.4rem;
                    background: #979797;
                    top: 50%;
                    left:100%;
                    transform: translateY(-50%);
                }
                .box{
                    border: 1px solid #dedede;
                    width: 1.85rem;
                    height: 1.26rem;
                    margin: 0 auto;
                }
            }
            
        }
    }
</style>

