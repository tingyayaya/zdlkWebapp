<template>
    <div class="record-view isheader">
        <my-header :left="true" :title="title"></my-header>
        <p>请选择记录项</p>
        <ul class="spread-lsit">
            <li>
                <router-link :to="{name:'recordFoodView'}">
                    <i class="icon-z icon-z-re-diet"></i>
                    <span>记饮食</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'recordWeightView'}">
                    <i class="icon-z icon-z-re-weight"></i>
                    <span>记体重</span>
                </router-link>
                
            </li>
            <li>
                <router-link :to="{name:'recordUrineView'}">
                    <i class="icon-z icon-z-re-sugar"></i>
                    <span>尿酮</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'recordSugarView'}">
                    <i class="icon-z icon-z-re-urine"></i>
                    <span>血糖</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'

export default {
    data() {
        return {
            title: '记录'
        }
    },
    components: { MyHeader }

}
</script>

<style lang="scss">
.record-view{
     p{
         text-align: center;
         padding: 160px 0;
         color: #888;
     }
     .spread-lsit{
         text-align: center;
         width: 100%;
         li{
             display: inline-block;
             text-align: center;
             width: 22%;
             span{
                 font-size: 24px;
             }
         }
     }
}
</style>
