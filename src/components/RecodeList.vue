<template>
  <ul>
    <li v-for="item in list">
      <div class="card-cart">( <span>{{item.time}}</span> )</div>
      <div class="card-li">
        <div class="card-list">
          <div class="card-m">
              <p>{{item.value}}</p>
              <div class="img-list">
                <div class="img" v-for="urlddd in item.imgs" :style="{ backgroundImage: 'url('+urlddd+')'}"></div>
              </div>
          </div>
        </div>
      </div>
      <div class="card-b">
        <i class="icon-z icon-z-evaluate"></i>
        <span>营养师评价:{{item.evaluation=="" ? "暂无评价":item.evaluation}}</span> 
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: [ 'list' ]
}
</script>

<style lang="scss" scoped>
$border1: 1px solid #dedede;
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
</style>
