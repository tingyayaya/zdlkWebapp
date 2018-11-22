<template>
   <div class="bg-grey myhome-list">
      <div class="no-data" v-show="foodlist.length==0"><i class="icon-z icon-z-nolist"></i><p>没有饮食记录</p></div>
       <ul>
          <li v-if="foodlist.length">
            <div class="card-li">
              <div v-for="item2 in foodlist" class="card-list">
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
              <span>营养师评价:暂无评价</span> 
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return{
            
        }
    },
    props: ['foodlist']
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
       margin: 1rem 0;
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