<template>
    <div class="my-collect isheader">
       <my-header :left="true" :title="title"></my-header>
       <my-list :listRightPic="true" listRightPicLink="myCollectDeView" :list="list"></my-list>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyList from '@/components/MyList'

export default {
    data() {
        return {
            title: '我的收藏',
            list: [
                {
                    img: 'http://img.hb.aicdn.com/b87734aa50aceca53cc1cee9d145eb394054183960e23-HVnzLX_fw658',
                    title: '听说你工作太忙没空运动？别为懒找借口',
                    time: '2017-02-11',
                    num: '125',
                    id: '123'
                },
                {
                    img: 'http://img.hb.aicdn.com/1ec89f7633150fb0e9c28b0a40c956b60a65f54526a34-Eqaxel_fw658',
                    title: '营养指导，让你健康瘦身',
                    time: '2017-02-11',
                    id: '123',
                    num: '125',
                }
            ]
        }
    },
    components: { MyHeader, MyList }
}
</script>

<style>

</style>
