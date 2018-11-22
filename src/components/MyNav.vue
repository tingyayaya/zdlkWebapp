<template>
    <div>
        <div class="my-nav-r" :class="{hassearch:ishassearch}">
            <ul class="my-nav">
                <router-link v-for="(item, index, key) in list" :to="{ name: item.router, params: {activeId:index}}" :key="index">
                    <li @click="changeTab(index,item.name)" :class="{active: active==index}">
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
        changeTab(index, name) {
            this.active = index;
            this.$emit('tabchange', {index: index, name: name});
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
  
  top:0.88rem;
  &.hassearch{
       position: fixed;
       top:1.76rem;
  }
  &::-webkit-scrollbar{ 
    width: 0; 
    height: 0;   
    background-color: #fff;  
    }
}
.my-nav{
    min-width:5rem; 
    display: flex;
    a{
        line-height: 0.68rem;
        text-align: center;
        flex: 1;
        li{ 
            display: inline-block; 
            text-align: center;
            position: relative;
            text-overflow: ellipsis;
            word-break: keep-all;
            min-width: 1.2rem;
            white-space: nowrap;
            margin: 0 0.2rem;
            &.active{
                color:#5B873C;
                span{
                    display: inline-block;
                    width: 0.6rem;
                    height: 0.04rem;
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
