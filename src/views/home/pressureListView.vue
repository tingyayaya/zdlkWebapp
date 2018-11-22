<template>
    <div class="home-list-view">
        <my-header :title="title" :left="true"></my-header>
        <div class="no-data" v-show="list.length==0"><i class="icon-z icon-z-nolist"></i><p>您还没有血压记录</p></div>
        <div class="bg-grey padding-t-b-20 myhome-list">
            <RecodeList :list="list" v-if="list.length"></RecodeList>
            <div class="more" v-show="list.length!=0">
                <mt-button type="default" class="round-btn" @click="handleMore">查看更多</mt-button>
                <mt-button type="default" class="round-btn" @click="handleCurve">查看曲线</mt-button>
            </div>
        </div>
        <mt-button type="primary" class="fixed-btn-b" @click="handleRecord">记血压</mt-button>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import RecodeList from '@/components/RecodeList'

export default {
    data() {
        return{
            title: '我的血压',
        }
    },
    computed: {
      list() {
        return this.$store.getters.getRecodeList4Last;
      }
    },
    created(){
      this.$store.dispatch('getRecodeList3', 3)
    },
    methods:{
        handleRecord(){
            this.$router.push({name:'recordPressureView'})
        },
        handleCurve(){
            this.$router.push({name:'pressureCurveView'})
        },
        handleMore(){
            this.$router.push({name:'pressureMoreView'})
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
</style>

