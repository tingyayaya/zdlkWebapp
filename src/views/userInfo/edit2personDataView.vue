<template>
    <div class="userinfo-view">
        <my-header :title="title" :left="flag">
          <router-link slot="message" :to="{ name: 'personDataView' }">
            <span>保存</span>
          </router-link>
        </my-header>
        <div class="my-list-space isheader">
            <ul>
                <li>
                  <label for="">姓名</label>
                  <input type="text" v-model="list.name">
                </li>
                <li>
                  <label for="">身份证</label>
                  <input v-model="list.idCard" type="number">
                </li>
                <li>
                  <label for="">职业</label>
                  <input type="text" v-model="list.job">
                </li>
            </ul>
            <dl class="edit-div">
                <dt>性别</dt>
                <dd>
                  <p :class="{active: item.value==list.gender}" @click="getSelect(item.value)" v-for="(item, key) in option">{{item.name}}<i class="icon iconfont icon-select"></i> </p>
                </dd>
            </dl>
            <ul>
                <li>
                  <label for="">身高</label>
                  <input type="number" v-model="list.height">
                </li>
                <li>
                  <label for="">体重</label>
                  <input type="number" v-model="list.weighr">
                </li>
                <li>
                  <label for="">腰围</label>
                  <input type="number" v-model="list.waist">
                </li>
                <li>
                  <label for="">臀围</label>
                  <input type="number" v-model="list.hip">
                </li>
                <li>
                  <label for="">腿围</label>
                  <input type="number" v-model="list.leg">
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
            option: [
                {
                    name: '男',
                    value: 1
                },{
                    name: '女',
                    value: 0
                }
            ],
            list:{
                name: '朱小猪',
                tel: '',
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
        },
        getSelect(v){
         this.list.gender = v;
         console.log(v)
        }
    },
    created() {
        this.gender = this.$route.query.gender ? '1' : '0'
    }
}
</script>

<style lang="scss" scoped>
.userinfo-view{
    height: 100%;
    background: #f8f8f8;
    font-size: 0.28rem;
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
            line-height: 0.66rem;
            display: flex;
            label{
                flex:1;
            }
            input{
                color: #888;
                flex: 2;
                text-align: right;
                padding-right:0.2rem; 
            }
        }
    }
}

dl{
  margin-top: 0.2rem;
  border-bottom: 1px solid #dedede;

  dt{
    border-bottom: 1px solid #dedede;
    padding: 0.2rem;
  }
  dd{
     background: #fff;
      padding: 1px 0rem 1px 0.2rem;
      display: flex;
      flex-flow: column wrap;
      p{
          line-height: 0.66rem;
          position: relative;
          cursor: pointer;
          &.active{
              .icon-select{
                  color: #F47340;
              }
          }
          .icon-select{
            color:transparent;
            position: absolute;
            right: 0.2rem;
          }
      }
      p+p{
          border-top: 1px solid #dedede;
      }
  }   
}


</style>
