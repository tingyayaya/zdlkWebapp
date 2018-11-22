<template>
    <div class="userinfo-view">
        <my-header :title="title" :left="flag">
          <i class="icon-z icon-z-arrow-left"  @click="goback" slot="otherleft"></i>
          <div slot="message" @click="edit">
            <span  v-show="!isEdit">修改</span>
            <span  v-show="isEdit">保存</span>
          </div>
        </my-header>
        <div class="my-list-space isheader" v-show="!isEdit">
            <ul>
                <li>
                  <label for="">姓名</label>
                  <span>{{list.name}}</span>
                </li>
                <li>
                  <label for="">身份证</label>
                  <span>{{list.cardId}}</span>
                </li>
                <li>
                  <label for="">性别</label>
                  <span>{{list.gender}}</span>
                </li>
                <li>
                  <label for="">职业</label>
                  <span>{{list.professional}}</span>
                </li>
            </ul>
            <ul>
                <li class="unit">
                  <label for="">身高</label>
                  <span>{{list.height}}</span>
                  <b v-if="list.height">cm</b>
                </li>
                <li class="unit">
                  <label for="">体重</label>
                  <span>{{list.weight}}</span>
                  <b v-if="list.weight">kg</b>
                </li>
                <li class="unit">
                  <label for="">腰围</label>
                  <span>{{list.waist}}</span>
                   <b v-if="list.waist">cm</b>
                </li>
                <li class="unit">
                  <label for="">臀围</label>
                  <span>{{list.hip}}</span>
                   <b v-if="list.hip">cm</b>
                </li>
            </ul>
        </div>
        <div class="my-list-space isheader" v-show="isEdit">
            <ul>
                <li>
                  <label for="">姓名</label>
                  <input type="text" v-model="list.name">
                </li>
                <li>
                  <label for="">身份证</label>
                  <input v-model="list.cardId" type="number">
                </li>
                <li>
                  <label for="">职业</label>
                  <input type="text" v-model="list.professional">
                </li>
            </ul>
            <dl class="edit-div">
                <dt>性别</dt>
                <dd>
                  <p :class="{active: item.name==list.gender}" @click="getSelect(item.value)" v-for="(item, key) in option">{{item.name}}<i class="icon iconfont icon-select"></i> </p>
                </dd>
            </dl>
            <ul>
                <li class="unit">
                  <label for="">身高</label>
                  <input type="number" v-model="list.height">
                  <b>cm</b>
                </li>
                <li class="unit">
                  <label for="">体重</label>
                  <input type="number" v-model="list.weight">
                  <b>kg</b>
                </li>
                <li class="unit">
                  <label for="">腰围</label>
                  <input type="number" v-model="list.waist">
                  <b>cm</b>
                </li>
                <li class="unit">
                  <label for="">臀围</label>
                  <input type="number" v-model="list.hip">
                  <b>cm</b>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';

export default {
    components: { MyHeader },
    data() {
        return {
            title: '个人资料',
            flag: false,
            isEdit: false,
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
                tel: '13522222215',
                cardId: '',
                gender: '',
                professional: '',
                height: '',
                weight: '',
                waist: '',   //腰围
                hip: '',   //臀围
            }
        }
    },
    created:function(){
      this.$store.dispatch('getInfo').then(() => {
        this.list =  this.$store.getters.getInfo
      })
    },
    methods: {
      goback(){
        var self = this;
        if(this.isEdit){
          MessageBox.confirm('您需要保存刚才的修改么？').then(action => {
            self.$store.dispatch('updateInfo', self.list).then(() => {
              var index = self.$store.getters.getInfo.updateType;
              if(index!=0){
                  //修改失败
                  Toast({
                      message: self.errorcode.arr[index],
                      position: 'middle',
                      duration: 5000
                  });
              }
            })
          })
          .catch(()=>{
              self.$router.go(-1);
          });
        }else{
          self.$router.go(-1);
        }
      },
      getSelect(v){
        if(v){
          this.list.gender = '男';
        }else{
          this.list.gender = '女';
        }
      },
      edit() {
        var self = this;
        this.isEdit = !this.isEdit;
        this.list.gender = this.list.gender == ''? '男': this.list.gender;
        if(this.isEdit){
          return;
        }else{
          this.$store.dispatch('updateInfo', this.list).then(() => {
            var index = this.$store.getters.updateInfo;
             if(index!=0){
                //修改失败
                Toast({
                    message: self.errorcode.arr[index],
                    position: 'middle',
                    duration: 5000
                });
             }
          })
        }
      }
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
        padding-left: 0.3rem;
        margin-top: 0.2rem;
        border-bottom: 1px solid #dedede;
        border-top: 1px solid #dedede;
        box-sizing: border-box;
        li+li{
                border-top: 1px solid #dedede;
            }
        li{
            line-height: 0.78rem;
            display: flex;
            label{
                flex:1;
            }
            input,span{
                color: #888;
                flex: 2;
                text-align: right;
                padding-right:0.3rem; 
            }
            b{
              font-weight: normal;
              font-size: 0.28rem;
              width: 0.6rem;
              color: #888;
            }
            
        }
        li.unit{
          input,span{
            padding-right:0.1rem; 
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
      padding: 1px 0rem 1px 0.3rem;
      display: flex;
      flex-flow: column wrap;
      p{
          line-height: 0.78rem;
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
            right: 0.3rem;
            font-size: 0.26rem;
          }
      }
      p+p{
          border-top: 1px solid #dedede;
      }
  }   
}
</style>
