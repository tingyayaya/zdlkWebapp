<template>
    <div class="my-collect">
        <my-header :left="true" :title="title">
            <i class="icon-z " :class="star ? 'icon-z-star':'icon-z-unstar'" slot="stars"  @click="starToggle"></i>
        </my-header>
        <my-acticle :list="list" :type1="true"></my-acticle>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyActicle from '@/components/MyActicle'
import CollectLike from '@/components/Collect'
import { Toast } from 'mint-ui';

export default {
    data() {
        return{
            title: '我的收藏',
            star: true,
            list: {
                img: 'http://img.hb.aicdn.com/b87734aa50aceca53cc1cee9d145eb394054183960e23-HVnzLX_fw658',
                title: '听说你工作太忙没空运动？别为懒找借口',
                time: '2017-02-11',
                content: '我是内容',
                id: '123',
                num: '125',
            }
        }
    },
    methods: {
        starToggle() {
            this.star = ! this.star;
            if(this.star){
               Toast({
                   message: '收藏成功',
                   duration: 2500
               });
            }else{
                Toast({
                   message: '取消收藏',
                   duration: 2500
               });
            }
        }
    },
    components: { MyHeader, MyActicle, CollectLike }
}
</script>

<style>

</style>