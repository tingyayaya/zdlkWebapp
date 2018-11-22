<template>
    <div class="home-list-view">
        <my-header :title="title" :left="true"></my-header>
        <div class="no-data" v-show="list.length==0"><i class="icon-z icon-z-nolist"></i><p>您还没有运动量记录</p></div>
        <div class="bg-grey padding-t-b-20 myhome-list">
            <ul>
                <li v-for="item in list">
                    <div class="card-cart">( <span>{{item.time}}</span> )</div>
                    <div class="card-li">
                        <dl>
                          <dt v-if="item.movement">运动量:</dt>
                          <dd v-if="item.movement">{{item.movement}}</dd>
                          <dt v-if="item.water">饮水量:</dt>
                          <dd v-if="item.water">{{item.water}}</dd>
                          <dt v-if="item.toilet">大便次数:</dt>
                          <dd v-if="item.toilet">{{item.toilet}}</dd>
                          <dt v-if="item.calcium">钙片服用量:</dt>
                          <dd v-if="item.calcium">{{item.calcium}}</dd>
                          <dt v-if="item.vitamin">维生素服用量:</dt>
                          <dd v-if="item.vitamin">{{item.vitamin}}</dd>
                          <dt v-if="item.hunger">饥饿感:</dt>
                          <dd v-if="item.hunger">{{item.hunger}}</dd>
                          <dt v-if="item.feel">自我感觉:</dt>
                          <dd v-if="item.feel">{{item.feel}}</dd>
                        </dl>
                    </div>
                   <div class="card-b">
                    <i class="icon-z icon-z-evaluate"></i>
                    <span>营养师评价:{{item.evaluation=="" ? "暂无评价":item.evaluation}}</span> 
                   </div>
                </li>
            </ul>
        </div>
        <mt-button type="primary" class="fixed-btn-b" @click="handleRecord">记运动量</mt-button>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'

export default {
    data() {
        return{
            title: '我的运动量',
        }
    },
    computed: {
      list() {
        return this.$store.getters.getRecodeList7;
      }
    },
    created(){
      this.$store.dispatch('getRecodeList7', 7)
    },
    methods:{
        handleRecord(){
            this.$router.push({name:'recordSportView'})
        }
    },
    components: { MyHeader }
}
</script>

<style lang="scss" scoped>

.bg-grey{
    background-color:#f8f8f8;
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
dl{
  padding: 0.2rem 0;
}
dl dt{
width: 30%;
display: inline-block;
font-size: 0.24rem;
color: #888;
vertical-align: top;
}
dl dd{
width: 60%;
display: inline-block;
font-size: 0.24rem;
margin-bottom: 0.2rem;
}
.home-list-view{
    height: 100%;
    background: #f8f8f8;
    
    .no-data{
       width: 100%;
       text-align: center;
       i{
           margin-top: 3rem;
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
            margin-bottom: 0.5rem;
            box-sizing: border-box;
            font-size: 0.26rem;
            .card-li{
              border-top: $border1;
              background-color:#fff;
              padding-left: 0.3rem;
            }
            .card-cart{
              font-size: 0.24rem;
              margin-bottom: 0.2rem;
              text-align: center;
              color: #b1b1b1;
            }
            p{
              font-size: 0.26rem;
            }
            .card-b{
              border-top: $border1;
              padding: 0.3rem;
              background-color:#fff;
              border-bottom: $border1;
              .icon-z-evaluate{
                vertical-align: top;
                opacity: 0.8;
              }
            }
            .card-h{
                display: flex;
                padding: 0.1rem 0;
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
            .card-list{
              border-bottom: $border1;
              padding-bottom:0.1rem;
            }
            .card-list:last-of-type{
                border: 0;
            }
            .card-m{
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
                    line-height: 0.8rem;
                   
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
</style>

