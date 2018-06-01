<template>
    <div>
        <ul class="my-nav">
            <router-link v-for="(item, index, key) in list"  @click="changeTab(index)" :class="{active: active==index}" :to="{ name: 'newsView'}" :key="index">
                <li>
                    {{item.name}}
                    <span></span>
                </li>
            </router-link>
        </ul>
         <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
           active: 0,
        }
    },
    props: [ 'list' ],
    methods: {
        changeTab(index) {
            console.log(1);
            this.active = index;
        }
    }

}
</script>
<style lang="scss" scoped>
.my-nav{
    background: #f6f6f6;
    display: flex;
    flex-flow: row nowrap;
    position:fixed;
    width: 100%;
    top: 88px;
    a{
        flex: 1;
        line-height: 68px;
        text-align: center;
        li{
             position: relative;
        }
        &.active{
            li{
                color:#5B873C;
                span{
                    display: inline-block;
                    width: 60px;
                    height: 4px;
                    background-color:#5B873C;
                    position:absolute;
                    bottom: 0;
                    left: 30%;
                }
            }
        }
    }
    
}
</style>
