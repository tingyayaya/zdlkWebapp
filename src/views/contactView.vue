<template>
    <div class="contact-view">
        <my-header :title="title" :left="flag"></my-header>
        <ul>
            <li>
                <router-link :to="{ name: 'dietView' }" listname="diet">
                    <i class="icon-z icon-z-dietitian"></i>
                    <span>我的营养师</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'doctorView'}" listname="doc">
                    <i class="icon-z icon-z-doctor"></i>
                    <span>我的医生</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'friendView'}" listname="friends">
                    <i class="icon-z icon-z-friends"></i>
                    <span>我的朋友</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'lineView'}" listname="line">
                    <i class="icon-z icon-z-hot-line"></i>
                    <span>健康热线</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
export default {
    name: 'contact-view',
    components: { MyHeader },
    data() {
        return {
           title : '联系人',
           flag : false
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-view{
    width: 100%;
    ul{
        font-size: 0.28rem;
        li{
            padding: 0.1rem;
            box-sizing: border-box;
            border-bottom: 1px solid #dedede;
            i{
                margin-right: 0.1rem;
            }
            a{
                width: 100%;
                height: 100%;
                display: inline-block;
            }
            
        }
        li:active{
            background: #f8f8f8;
        }
    }
   
}

</style>
