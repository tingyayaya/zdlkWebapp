<template>
    <div class="home-list-view">
        <my-header :title="title" :left="true"></my-header>
        <div class="bg-grey padding-t-20 padding-b-20 myhome-list">
            <ul>
                <li v-for="item in list">
                    <div class="card-h"><span>{{item.sortType}}</span><span>{{item.time}}</span></div>
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
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'

export default {
    data() {
        return{
            title: '我的血糖',
            list: [        //最近一条的数据
                {
                    sortType: '中餐前',
                    time: '2018-03-09',
                    content: '',
                    value: '6.2mmol/L',
                    imgs: ['http://img.hb.aicdn.com/df75487fbc3ad89bb0c42eee053c3fd2fdc6b18a12b99-qYfZrA_fw658'],
                    evaluation: '我是评价么'
                },
                {
                    sortType: '中餐前',
                    time: '2018-03-09',
                    content: '',
                    value: '6.2mmol/L',
                    imgs: [],
                    evaluation: ''
                },
                {
                    sortType: '中餐前',
                    time: '2018-03-09',
                    content: '',
                    value: '6.2mmol/L',
                    imgs: ['http://img.hb.aicdn.com/df75487fbc3ad89bb0c42eee053c3fd2fdc6b18a12b99-qYfZrA_fw658','http://img.hb.aicdn.com/822759ac129cc52e64ceaffcc32bba9075b2a2ba393ff-QIjjcn_fw658'],
                    evaluation: '我是评价么'
                },
                {
                    sortType: '中餐前',
                    time: '2018-03-09',
                    content: '',
                    value: '6.2mmol/L',
                    imgs: ['http://img.hb.aicdn.com/47249fc1ee21575bab66ad3ba5a7ef8cb3b7f7b32796e-uGgdMO_fw658'],
                    evaluation: ''
                }
            ]
        }
    },
    methods:{
        handleRecord(){
            this.$router.push({name:'recordSugarView'})
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
.padding-b-20{
  padding-bottom: 0.2rem;
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
