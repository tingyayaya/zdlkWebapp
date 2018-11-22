<template>
    <div class="home-list-view">
        <my-header :title="title" :left="true"></my-header>
        <div class="no-data" v-show="list.length==0"><i class="icon-z icon-z-nolist"></i><p>您还没有血糖记录</p></div>
        <div class="bg-grey padding-t-b-20 myhome-list">
            <ul>
                <li v-for="item in list">
                  <div class="card-cart">( <span>{{item.time}}</span> )</div>
                  <div class="card-li">
                    <div v-for="item2 in item.list" class="card-list">
                      <div class="card-h"><span>{{item2.sortType}}</span></div>
                      <div class="card-m">
                          <p>{{item2.content}}</p>
                          <div class="img-list">
                            <div class="img" v-for="urlddd in item2.imgs" :style="{ backgroundImage: 'url('+urlddd+')'}"></div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-b">
                    <i class="icon-z icon-z-evaluate"></i>
                    <span>营养师评价:{{item.evaluation}}</span> 
                  </div>
                </li>
            </ul>
            <div class="more" v-if="list.length!=0">
                <mt-button type="default" class="round-btn" @click="handleMore">查看更多</mt-button>
                <mt-button type="default" class="round-btn" @click="handleCurve">查看曲线</mt-button>
            </div>
        </div>
        <mt-button type="primary" class="fixed-btn-b" @click="handleRecord">记血糖</mt-button>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import RecodeList from '@/components/RecodeList'

export default {
    data() {
        return{
            title: '我的血糖',
        }
    },
    computed: {
      list() {
        return this.$store.getters.getRecodeListSugarLast;
      }
    },
    created(){
      this.$store.dispatch('getRecodeListSugar', 5)
    },
    methods:{
        handleRecord(){
            this.$router.push({name:'recordSugarView'})
        },
        handleCurve(){
            this.$router.push({name:'sugarCurveView'})
        },
        handleMore(){
            this.$router.push({name:'sugarMoreView'})
        }
    },
    components: { MyHeader, RecodeList}
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
                    line-height: 0.5rem;
                   
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

