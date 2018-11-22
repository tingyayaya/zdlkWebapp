<template>
       <footer class="my-footer">
           <ul>
                <li @click="switchTab(0)">
                    <router-link to="home" :class="{active : active == 0}">
                        <i class="icon iconfont" :class="{ 'icon-home-full1' : active == 0, 'icon-home': active !=0 }"></i>
                        <p>首页</p>
                    </router-link>
                </li>
                <li @click="switchTab(1)">
                    <router-link to="contact" :class="{active : active == 1}">
                        <i class="icon iconfont" :class="{ 'icon-tel-book-full' : active == 1, 'icon-tel-book': active !=1 }"></i>
                        <p>联系人</p>
                    </router-link>
                </li>
                <li @click="switchTab(2)">
                    <router-link to="health" :class="{active : active == 2}">
                        <i class="icon iconfont" :class="{ 'icon-health-full' : active == 2, 'icon-health': active !=2 }"></i>
                        <p>关注健康</p>
                    </router-link>
                </li>
                <li @click="switchTab(3)">
                    <router-link to="mall" :class="{active : active == 3}">
                        <i class="icon iconfont" :class="{ 'icon-mall-full' : active == 3, 'icon-mall': active !=3 }"></i>
                        <p>商城</p>
                    </router-link>
                </li>
                <li @click="switchTab(4)">
                    <router-link to="mine" :class="{active : active == 4}">
                        <i class="icon iconfont" :class="{ 'icon-mine-full' : active == 4, 'icon-mine': active !=4 }"></i>
                        <p>我的</p>
                    </router-link>
                </li>
           </ul>
       </footer>
</template>

<script>
export default {
    name: 'my-footer',
    data() {
        return {
            active: 0,
        }
    },
    created() {
        var route = this.$route.path.split('/');
        switch (route[2]){
            case 'home' :
            this.active = 0;
            break;
            case 'contact' :
            this.active = 1;
            break;
            case 'health' :
            this.active = 2;
            break;
            case 'mall' :
            this.active = 3;
            break;
            case 'mine' :
            this.active = 4;
            break;
            default:
            this.active = 0;
            break
        }
    },
    methods: {
        switchTab(index) {
            this.active = index;
        }
    }
}
</script>

<style lang="scss" scoped>
$color:#C5D01A;
.border-t{
    border-top: 1px solid #b5b5b5;
}
.my-footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 0.98rem !important;
    padding: 0;
    color: #000;
    background: #F8F8F8;
    z-index: 999;
    ul{
        display: flex;
        flex-flow: row nowrap;
        @extend .border-t;
        li{
            flex: 1;
            font-size: 0.24rem;
            padding: 0.1rem 0;
            a{
               text-align: center;
                cursor: pointer;
                display: flex;
                flex-wrap: wrap;
                height: 0.98rem;
                &:visited{
                    color: inherit;
                }
                &.active{
                    color:$color
                }
                i{
                font-size: 0.36rem;
                margin: 0.05rem auto 0;
                }
                p{
                  width: 100%;
                  text-align: center;
                  font-size: 0.22rem;
                  height: 0.44rem;
                }
            }
        }
    }
}
</style>
