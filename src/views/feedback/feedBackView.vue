<template>
    <div class="feedback-view ">
        <my-header :left="false" :title="title">
          <i class="icon-z icon-z-arrow-left"  @click="goback" slot="otherleft"></i>
        </my-header>
        <div class="my-list-space isheader">
            <ul>
                <li>
                    <router-link :to="{name:'satisfactionView'}">
                       <label for="">客户质量</label>
                       <i class="icon iconfont icon-list-right"></i>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'productQView'}">
                       <label for="">产品建议</label>
                       <i class="icon iconfont icon-list-right"></i>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'complaintView'}">
                       <label for="">投诉</label>
                       <i class="icon iconfont icon-list-right"></i>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'customerQView'}">
                       <label for="">满意度调查</label>
                       <i class="icon iconfont icon-list-right"></i>
                    </router-link>
                </li>
                <!-- <li>
                    <router-link :to="{name:'otherView'}">
                       <label for="">其他</label>
                       <i class="icon iconfont icon-list-right"></i>
                    </router-link>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'

export default {
    data() {
        return {
            title: '意见与反馈'
        }
    },
    methods:{
      goback(){
        this.$router.push({name: 'mineView'})
      }
    },
    components: { MyHeader }

}
</script>

<style lang="scss" scoped>
.feedback-view{
    background: #f8f8f8;
    height: 100%;
}
.my-list-space{
    ul{
        width: 100%;
        background: #fff;
        padding-left: 0.2rem;
        margin-top: 0.2rem;
        border-bottom: 1px solid #dedede;
        border-top: 1px solid #dedede;
        box-sizing: border-box;
        li+li{
                border-top: 1px solid #dedede;
            }
        li{
            line-height: 0.78rem;
            
            a{
               display: flex;
               margin-right: 0.2rem;
            }
            label{
                flex:1;
            }
            span{
                color: #888;
                flex: 2;
                text-align: right;
            }
             .icon-list-right{
                color: #b3b3b3;
                font-size: 0.26rem;
                position: absolute;
                right: 0.2rem;
            }
        }
    }
}
</style>
