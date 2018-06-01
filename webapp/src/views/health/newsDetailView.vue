<template>
    <div class="detail-view">
        <my-header :title="title" :left="flag"></my-header>
        <el-main class="isheader">
           <detail-list :list="list"></detail-list>
        </el-main>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import DetailList from '@/components/DetailList';
export default {
    data() {
        return {
            title: '新闻简介',
            flag: true,
            list: {
                title : '正大集团谢国民资深董事长出席博鳌亚洲论坛2018年年会',
                time : '2017-05-03',
                content : '4月10日，以“开放创新的亚洲•繁荣发展的世界”为主题的博鳌亚洲论坛2018年年会开幕式在海南博鳌举行。中国国家主席习近平出席年会开幕式并发表重要主旨演讲。中国侨商投资企业协会会长、泰国正大集团资深董事长谢国民参加年会开幕式，并在9日下午举行的博鳌亚洲论坛“华商领袖与华人智库圆桌会议”上作重要发言'
            }
        }
    },
    components: { MyHeader, DetailList }
    
}
</script>

<style lang="scss">
.detail-view{
   .el-main{
       .title{
           margin-bottom: 20px;
           p{
               font-size: 36px;
           }
           i{
               color: #d8d8d8;
           }
           span{
               color: #888;
               line-height: 60px;
           }
       }
       .content{
           font-size: 28px;
           line-height: 50px;
           text-align: justify;
       }
   }
}
</style>
