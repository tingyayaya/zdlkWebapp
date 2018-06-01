<template>
    <ul class="news-list">
         <li v-for="item in list">
             <router-link :to="{ name: 'newsDetailView'}">
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
</template>

<script>
export default {
   name: 'news-list',
   props: [ 'list' ]
}
</script>

<style lang="scss" scoped>
.news-list{
    width: 100%;
    li{
        height: 160px;
        border-bottom: 1px solid #dedede;
        a{
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            padding: 20px;
            box-sizing: border-box;
            justify-content: space-between;
        }
        .imgbox{
            width: 120px;
            height: 120px;
            overflow: hidden;
        }
        .info{
            p{
                font-size: 30px;
                width: 450px;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            span{
                color: #888;
                font-size: 24px;
            }
        }
    }
}
</style>
