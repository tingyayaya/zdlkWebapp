<template>
    <div class="record-view isheader">
        <my-header :left="false" :title="title">
           <i class="icon-z icon-z-arrow-left"  @click="goback" slot="otherleft"></i>
        </my-header>
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
            <li>
                <router-link :to="{name:'recordSportView'}">
                    <i class="icon-z icon-z-re-sport"></i>
                    <span>记运动量</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'recordWaistView'}">
                    <i class="icon-z icon-z-re-waist"></i>
                    <span>记腰围</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'recordPressureView'}">
                    <i class="icon-z icon-z-re-pressure"></i>
                    <span>记血压</span>
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
    methods: {
      goback(){
        this.$router.push({name: 'mineView'})
      }
    },
    components: { MyHeader }

}
</script>

<style lang="scss" scoped>
.record-view{
     p{
         text-align: center;
         padding: 1.4rem 0;
         color: #888;
     }
     .spread-lsit{
         width: 90%;
         font-size: 0;
         margin: 0 auto;
         li{
             display: inline-block;
             text-align: center;
             width: 25%;
             margin-bottom: 0.4rem;
             i{
                display: block;
                margin: 0 auto;
             }
            
             span{
                 font-size: 0.24rem;
             }
         }
     }
}
</style>
