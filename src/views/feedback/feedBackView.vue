<template>
    <div class="feedback-view isheader">
        <my-header :left="true" :title="title"></my-header>
        <div class="my-list-space">
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
                <li>
                    <router-link :to="{name:'otherView'}">
                       <label for="">其他</label>
                       <i class="icon iconfont icon-list-right"></i>
                    </router-link>
                </li>
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
    components: { MyHeader }

}
</script>

<style lang="scss">
.feedback-view{
    height: 100%;
    background: #f8f8f8;
}
.my-list-space{
    ul{
        width: 100%;
        background: #fff;
        padding-left: 20px;
        margin-top: 20px;
        border-bottom: 1px solid #dedede;
        border-top: 1px solid #dedede;
        box-sizing: border-box;
        li+li{
                border-top: 1px solid #dedede;
            }
        li{
            line-height: 66px;
            
            a{
               display: flex;
               margin-right: 20px;
            }
            label{
                flex:1;
            }
            span{
                color: #888;
                flex: 2;
                text-align: right;
            }
        }
    }
}
</style>
