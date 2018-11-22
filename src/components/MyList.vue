<template>
    <div>
        <ul class="my-list" v-if="listRightPic">
            <li v-for="item in list">
                <router-link :to="{ name: listRightPicLink, query: { id: item.id }}">
                    <div class="info">
                        <p>{{item.title}}</p>
                        <span>{{item.time}}</span>
                    </div>
                    <div class="imgbox">
                        <img :src="item.img" alt="">
                    </div>
                </router-link>
            </li>
        </ul>
        <ul class="my-list listTil" v-if="listTil">
            <li v-for="item in list">
                <router-link :to="{ name: listTillink,query: { id: item.id, title: item.title } }">
                    <div class="title">
                        <p>{{item.title}}</p>
                    </div>
                    <div class="right">
                        <i class="icon iconfont icon-list-right"></i>
                    </div>
                </router-link>
            </li>
        </ul>
        <ul class="my-list listAds" v-if="listAds">
            <li v-for="item in list">
                <div class="title">
                    <p>{{item.title}}</p>
                    <p class="small">地址: {{item.address}}</p>
                    <p class="small">联系方式: {{item.tel}}</p>
                </div>
            </li>
        </ul>
        <ul class="my-list" v-if="listLeftPic">
            <li v-for="item in list">
                 <router-link :to="{ name: listLeftPicLink, query: { id: item.id } }">
                    <div class="imgbox">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="info">
                        <p>{{item.title}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'my-list',
    data() {
       return {
          
       }
    },
    props: { 
       list : Array, 
       listRightPic: {
           type: Boolean,
           default: false
       },
       listTil: {
           type: Boolean,
           default: false
       },
       listAds: {
           type: Boolean,
           default: false
       },
       listLeftPic: {
           type: Boolean,
           default: false
       },
       listTillink: String,
       listRightPicLink: String,
       listLeftPicLink: String
    } 
}
</script>

<style lang="scss" scoped>
.my-list{
    width: 100%;
    &.listAds{
       .small{
           color: #888;
           font-size: 0.24rem;
           line-height: 0.44rem;
       }
    }
    &.listTil{
        p{
            width: 5.6rem;
            overflow : hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    li{
        border-bottom: 1px solid #dedede;
        padding: 0.2rem;
        a{
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            box-sizing: border-box;
            justify-content: space-between;
        }
        .imgbox{
            width: 1.2rem;
            height: 1.2rem;
            overflow: hidden;
        }
        .info{
            p{
                font-size: 0.3rem;
                width: 4.5rem;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                height: 0.84rem;
                line-height: 0.36rem;
            }
            span{
                color: #888;
                font-size: 0.24rem;
            }
        }
    }
    li:active{
            background: #f8f8f8;
        }
   
}
</style>
