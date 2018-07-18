<template>
    <div class="health-view">
        <my-header :title="title" :left="flag"></my-header>
        <ul>
            <li>
            <router-link :to="{ name: 'companyView' }">
                <i class="icon iconfont icon-company"></i>
                <span>公司简介</span>
                <i class="icon iconfont icon-list-right"></i>
            </router-link>
            <router-link :to="{ name: 'knowledgeView' }">
                <i class="icon iconfont icon-knowledge"></i>
                <span>健康知识</span>
                <i class="icon iconfont icon-list-right"></i>
            </router-link>
            </li>
            <li>
            <router-link :to="{ name: 'sportsView' }">
                <i class="icon iconfont icon-sports"></i>
                <span>运动加油站</span>
                <i class="icon iconfont icon-list-right"></i>
            </router-link>
            <router-link :to="{ name: 'caseView' }">
                <i class="icon iconfont icon-Star"></i>
                <span>成功案例</span>
                <i class="icon iconfont icon-list-right"></i>
            </router-link>
            </li>
            <li>
            <router-link :to="{ name: 'questionView' }">
                <i class="icon iconfont icon-question"></i>
                <span>关注的问题</span>
                <i class="icon iconfont icon-list-right"></i>
            </router-link>
            <router-link :to="{ name: 'cookView' }">
                <i class="icon iconfont icon-cookies"></i>
                <span>健康厨房</span>
                <i class="icon iconfont icon-list-right"></i>
            </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import MyHeader from '../components/MyHeader'

export default {
    name: 'health-view',
    components: { MyHeader },
    data() {
        return {
            title: '关注健康',
            flag: false
        }
    }
}
</script>

<style lang="scss" scoped>

.health-view{
    width: 100%;
    background: #f8f8f8;
    height: 100%;
    ul{ 
        padding-top: 5px;
        font-size: 28px;
        li{
            padding-left: 20px;
            box-sizing: border-box;
            border-bottom: 1px solid #dedede;
            border-top: 1px solid #dedede;
            margin-top: 20px;
            background-color:#fff;
            a+a{
                    border-top: 1px solid #dedede;
            }
            i{
                margin-right: 10px;
                font-size: 30px;
            }
            a{
                width: 100%;
                height: 100%;
                display: inline-block;
                line-height: 76px;
                position: relative;
            }
            .icon-company{
                color: #AACB3C;
            }
            .icon-knowledge{
                font-size: 26px;
                color: #3CC0CB;
            }
            .icon-sports{
                color: #F47340;
            }
            .icon-Star{
                color: #F9BA17;
            }
            .icon-question{
                color: #CF2C4A;
            }
            .icon-cookies{
                color: #5B873C;
            }
            .icon-list-right{
                color: #b3b3b3;
                font-size: 26px;
                position: absolute;
                right: 20px;
            }
        }
    }
}
</style>
