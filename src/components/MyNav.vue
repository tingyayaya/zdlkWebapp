<template>
    <div>
        <div class="my-nav-r" :class="{hassearch:ishassearch}">
            <ul class="my-nav">
                <router-link v-for="(item, index, key) in list" :to="{ name: item.router, params: {activeId:index}}" :key="index">
                    <li @click="changeTab(index)" :class="{active: active==index}">
                        {{item.name}}
                        <span></span>
                    </li>
                </router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'my-nav',
    data() {
        return {
           active: 0,
        }
    },
    props: {
        list: Array,
        ishassearch: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        changeTab(index) {
            this.active = index;
            this.$emit('tabchange', index);
            //console.log(index);
        }
    },
    created() {
        this.active = (this.$route.params.activeId == '' || this.$route.params.activeId==undefined) ? 0 : this.$route.params.activeId;
        //console.log(this.$route.params.activeId)
    }
}
</script>
<style lang="scss" scoped>
/* 分类菜单*/
.my-nav-r{
  width: 100%; 
  background-color:#f6f6f6; 
  overflow-x: scroll; 
  -webkit-overflow-x: scroll;
  z-index: 999;
  position: fixed;
  top:88px;
  &.hassearch{
       position: fixed;
       top:176px;
  }
  &::-webkit-scrollbar{ 
    width: 0; 
    height: 0;   
    background-color: #fff;  
    }
}
.my-nav{
    min-width:500px; 
    display: flex;
    a{
        line-height: 68px;
        text-align: center;
        li{ 
            display: inline-block; 
            text-align: center;
            position: relative;
            text-overflow: ellipsis;
            word-break: keep-all;
            min-width: 120px;
            margin: 0 20px;
            &.active{
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
