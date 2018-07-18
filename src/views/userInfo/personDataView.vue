<template>
    <div class="userinfo-view">
        <my-header :title="title" :left="flag"></my-header>
        <div class="my-list-space isheader">
            <ul>
                <li>
                    <router-link :to="{name:'editPersonDataView', query:{ title:'姓名', content: list.name, type: 'text'}}">
                        <label for="">姓名</label>
                        <span>{{list.name}} <i class="icon iconfont icon-list-right"></i> </span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'editPersonDataView', query:{ title:'身份证', content: list.idCard, type: 'idCard'}}">
                    <label for="">身份证</label>
                    <span>{{list.idCard}} <i class="icon iconfont icon-list-right"></i> </span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'editPersonDataView', query:{ title:'性别', content: list.gender, type: 'gender'}}">
                    <label for="">性别</label>
                    <span>{{list.gender}} <i class="icon iconfont icon-list-right"></i> </span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'editPersonDataView', query:{ title:'职业', content: list.job, type: 'text'}}">
                    <label for="">职业</label>
                    <span>{{list.job}} <i class="icon iconfont icon-list-right"></i> </span>
                    </router-link>
                </li>
            </ul>
            <ul>
                <li>
                    <router-link :to="{name:'editPersonDataView', query:{ title:'身高', content: list.height, type: 'text'}}">
                        <label for="">身高</label>
                        <span>{{list.height}} <i class="icon iconfont icon-list-right"></i> </span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'editPersonDataView', query:{ title:'体重', content: list.weight, type: 'text'}}">
                    <label for="">体重</label>
                    <span>{{list.weight}} <i class="icon iconfont icon-list-right"></i> </span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'editPersonDataView', query:{ title:'腰围', content: list.waist, type: 'text'}}">
                    <label for="">腰围</label>
                    <span>{{list.waist}} <i class="icon iconfont icon-list-right"></i> </span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'editPersonDataView', query:{ title:'臀围', content: list.hip, type: 'text'}}">
                    <label for="">臀围</label>
                    <span>{{list.hip}} <i class="icon iconfont icon-list-right"></i> </span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'editPersonDataView', query:{ title:'腿围', content: list.leg, type: 'text'}}">
                    <label for="">腿围</label>
                    <span>{{list.leg}} <i class="icon iconfont icon-list-right"></i> </span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'

export default {
    components: { MyHeader },
    data() {
        return {
            title: '个人资料',
            flag: true,
            list:{
                name: '朱小猪',
                tel: '13522222215',
                idCard: '',
                gender: '',
                job: '',
                height: '',
                weight: '',
                waist: '',   //腰围
                hip: '',   //臀围
                leg: '',   //腿围
            }
        }
    },
    methods: {
        submit() {
            console.log(1);
        }
    }
}
</script>

<style lang="scss">
.userinfo-view{
    height: 100%;
    background: #f8f8f8;
    font-size: 28px;
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
            }
            a:active{
                background: #f8f8f8;
            }
            label{
                flex:1;
            }
            span{
                color: #888;
                flex: 2;
                text-align: right;
                i{
                    margin-right: 10px;
                }
            }
        }
    }
}
</style>
