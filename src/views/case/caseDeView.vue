<template>
    <div class="detail-view">
        <my-header :title="title" :left="flag" >
            <i class="icon-z " :class="star ? 'icon-z-star':'icon-z-unstar'" slot="stars"  @click="starToggle"></i>
        </my-header>
        <div>
           <detail-list :list="list" :type1="true"></detail-list>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import DetailList from '@/components/MyActicle';
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            title: '成功案例',
            flag: true,
            star: true,
            list: {
                title : '案例一',
                time : '2017-05-03',
                num: '342',
                content : '肥胖不仅仅会影响人们的体型美观，更重要的是肥胖导致的一系列严重的并发症如高血压病、糖尿病、血脂紊乱、冠心病、恶性肿瘤等，控制体重也是预防代谢综合征和预防2型糖尿病及心血管疾病最直接的途径。'
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
    components: { MyHeader, DetailList }
    
}
</script>

<style lang="scss">

</style>