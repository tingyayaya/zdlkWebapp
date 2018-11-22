<template>
    <div class="home-view isfooter">
        <my-header :title="title" :left="flag" @getMessage = "message">
            <!-- <router-link :to="{name: 'messageView'}" slot="message" class="msg-icon">
                <i :class="{ 'new-active':isnews }"></i>
                <i class="icon iconfont icon-news"></i>
            </router-link> -->
        </my-header>
        <message mymsg="msgFirst" :msg="getMsg"></message>
        <div class="section-h">
            <router-link  :to="{ name: 'foodListView'}" class="btn">
              <mt-button type="primary"  class="medium">查看往期饮食记录</mt-button>
            </router-link>
        </div>
        <div class="section-h">
            <div class="nav">
                <p>您的曲线</p>
            </div>
            <div class="swipers">
              <div class="part-content line">
                  <div class="part">
                      <router-link :to="{name: 'weightCurveView'}"> 
                          <div class="box">
                              <i class="icon-l icon-l-chart1"></i>
                          </div>
                          <p>体重</p>
                      </router-link>
                  </div>
                  <div class="part"> 
                      <router-link :to="{name: 'sugarCurveView'}">
                          <div class="box">
                              <i class="icon-l icon-l-chart2"></i>
                          </div>
                          <p>血糖</p>
                      </router-link>
                  </div>
                  <div class="part"> 
                      <router-link :to="{name: 'urineCurveView'}">
                          <div class="box">
                              <i class="icon-l icon-l-chart3"></i>
                          </div>
                          <p>尿酮</p>
                      </router-link>
                  </div>
                  <div class="part"> 
                      <router-link :to="{name: 'pressureCurveView'}">
                          <div class="box">
                              <i class="icon-l icon-l-chart4"></i>
                          </div>
                          <p>血压</p>
                      </router-link>
                  </div>
                  <div class="part"> 
                      <router-link :to="{name: 'waistCurveView'}">
                          <div class="box">
                              <i class="icon-l icon-l-chart5"></i>
                          </div>
                          <p>腰围</p>
                      </router-link>
                  </div>
              </div>
            </div>
        </div>
        <div class="section-h">
            <div class="nav">
                <p>您的记录</p>
            </div>
            <div class="ispart-line part-content">
                <div class="part"> 
                    <router-link :to="{name: 'weightListView'}">
                        <div>
                            <i class="icon-z icon-z-my-weight"></i>
                        </div>
                        <div v-for="item in weight">
                          <p>体重:{{ item.value }}</p>
                          <span>{{item.time}}</span>
                        </div>
                    </router-link>
                </div>
               
                <div class="part"> 
                    <router-link :to="{name: 'urineListView'}">
                        <div><i class="icon-z icon-z-urine"></i></div>
                        <div v-for="item in urine">
                           <p>尿酮:{{ item.value }}</p>
                           <span>{{item.time}}</span>
                        </div>
                    </router-link>
                </div>
                <div class="part"> 
                    <router-link :to="{name: 'sugarListView'}">
                        <div><i class="icon-z icon-z-blood-sugar"></i></div>
                        <div v-for="item in sugar">
                           <p>血糖:{{ item.list[0].content }}</p>
                           <span>{{item.time}}</span>
                        </div>
                    </router-link>
                </div>
                
            </div>
            <div class="ispart-line part-content">
                <div class="part"> 
                    <router-link :to="{name: 'pressureListView'}">
                        <div><i class="icon-z icon-z-pressure"></i></div>
                        <div v-for="item in pressure">
                           <p>血压:{{ item.value }}</p>
                           <span>{{item.time}}</span>
                        </div>
                    </router-link>
                </div>
                <div class="part"> 
                    <router-link :to="{name: 'waistListView'}">
                        <div><i class="icon-z icon-z-waist"></i></div>
                        <div v-for="item in waist">
                           <p>腰围:{{ item.value }}</p>
                           <span>{{item.time}}</span>
                        </div>
                    </router-link>
                </div>
                <div class="part"> 
                    <router-link :to="{name: 'sportsListView'}">
                        <div><i class="icon-z icon-z-sport"></i></div>
                        <div v-for="item in sport">
                           <p>运动量:{{ item.movement }}</p>
                           <span>{{item.time}}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="section-h">
            <div class="nav">
                <p>您的专职营养师</p>
            </div>
            <div class="ispart-line part-content" v-for="item in list">
                <div class="part contact"> 
                    <p>{{item['name']}}</p>
                    <span>专职营养师</span>
                </div>
                <div class="part contact"> 
                    <p>{{item['tel']}}</p>
                    <span>手机</span>
                </div>
                <div class="part contact"> 
                    <p>{{item['tel']}}</p>
                    <span>健康热线</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import Message from '../components/Message'

export default {
    components: { MyHeader, Message },
    data() {
       return {
           userInfoState: JSON.parse(localStorage.getItem('userInfoState')).userInfoState,
           title: '首页',
           flag: false,
           isnews: true,
           list: []
       }
   },
   computed: {
     weight(){
       return this.$store.getters.getRecodeList1Last
     },
     urine(){
       return this.$store.getters.getRecodeList2Last
     },
     waist(){
       return this.$store.getters.getRecodeList4Last
     },
     pressure(){
       return this.$store.getters.getRecodeList3Last
     },
     sport(){
       console.log(this.$store.getters.getRecodeList7Last)
       return this.$store.getters.getRecodeList7Last
     },
     sugar(){
       return this.$store.getters.getRecodeListSugarLast
     },
     getMsg(){
       return this.$store.getters.getFistMsg
     }
   },
   created(){
     var self = this;
     this.getData()
     this.$store.dispatch('getFistMsg')

     this.$store.dispatch('getRecodeList1', 1)
     this.$store.dispatch('getRecodeList2', 2)
     this.$store.dispatch('getRecodeList4', 4)
     this.$store.dispatch('getRecodeList3', 3)
     this.$store.dispatch('getRecodeListSugar', 5)
     this.$store.dispatch('getRecodeList7', 7)
   
   },
   methods: {
      message(data){
        console.log(data);
      },
      getData() {
   
        var self = this;
        this.$axios({
          methods: 'post',
          url: self.baseurl.viewer+'/My_dietitian.jsp',
          params: {
            token: '',
            id: this.userInfoState.vipID
          }
        })
        .then(function(res){
          //console.log(res)
          var len =res.data.data.length; 
          if(res.data.code==0&&res.data.data.length!=''){
            for(var i=0; i<len; i++){
              var obj = {};
              obj['tel'] = res.data.data[i]['skt30.skf339'];
              obj['name'] = res.data.data[i]['skt30.skf335'];
              obj['technicalTitle'] = res.data.data[i]['skt30.skf2781'];
              self.list.push(obj);
            }
          }
        })
      }
   }
}
</script>

<style lang="scss" >
.border-t-20{
    border-bottom: 0.2rem solid #f8f8f8;
}
.border-b-1{
    border-bottom: 1px solid #f1f1f1;
}
.border-l-6{
    border-left: 0.06rem solid #AACB3C;
}
.swipers{
  width: 100%;
  overflow: scroll;
  
  .part-content{
    justify-content: space-between;
    width: 12rem;
    margin-right: 0.2rem; 
  }
}
.swipers::-webkit-scrollbar {display:none}
.home-view {
    width: 100%;
    
    .section-h{
        @extend .border-t-20;
        .btn{
            width: 100%;
            display: block;
            text-align: center;
            margin-bottom: 0.5rem;
        }
        .nav{
            height: 0.3rem;
            @extend .border-b-1;
            padding: 0.2rem 0.2rem;
            p{
                height: 0.3rem;
                @extend .border-l-6;
                padding-left: 0.1rem;
                font-size: 0.24rem;
                line-height: 0.3rem;
            }
        }
        .part-content{
            display: flex;
            flex-flow: row nowrap;
            &.line{
                .part{
                    p{
                        font-size: 0.28rem;
                        margin-top: 0.1rem;
                    }
                }
            }
            .part{
                flex:1;
                justify-content: space-around;
                text-align: center;
                padding:0.2rem 0;
                span{
                    font-size: 0.24rem;
                    color: #737373;
                    line-height: 0.5rem;
                }
                p{
                    font-size: 0.22rem;
                    overflow: hidden;
                    span{
                        color: #000;
                    }
                }
                &.contact{
                    text-align: left;
                    padding-left: 0.2rem;
                    p{
                        color: #5B873C;
                        font-size: 0.28rem;
                    }
                }
                .box{
                    border: 1px solid #dedede;
                    width: 1.85rem;
                    height: 1.26rem;
                    margin: 0 auto;
                }
            }
            &.ispart-line {
                .part+.part{
                    border-left: 1px solid #f1f1f1;
                }
            }
            &.ispart-line+.ispart-line{
              border-top: 1px solid #f1f1f1;
            }
        }
        
        .part-content-col{
            display: flex;
            flex-flow: column wrap;
            &.line{
                .part{
                    p{
                        font-size: 0.28rem;
                        margin-top: 0.1rem;
                    }
                }
            }
            .part{
                justify-content: space-around;
                align-content: center;
                position: relative;
                padding:0.2rem;
                a{
                  display: flex;
                }
                .baiss{
                  width: 100%;
                }
                .text{
                  span{
                    line-height: 1rem;
                  }
                  margin-right:1rem; 
                }
                .icon-list-right{
                  position: absolute;
                  top: 50%;
                  right: 0.3rem;
                  transform: translateY(-50%);
                  color: #737373;
                }
                span{
                    font-size: 0.24rem;
                    color: #737373;
                    line-height: 0.5rem;
                }
                p{
                    font-size: 0.2rem;
                    span{
                        font-size: 0.32rem;
                        color: #000;
                    }
                }
                &.contact{
                    text-align: left;
                    padding-left: 0.2rem;
                    p{
                        color: #5B873C;
                        font-size: 0.28rem;
                    }
                }
                .box{
                    border: 1px solid #dedede;
                    width: 1.85rem;
                    height: 1.26rem;
                    margin: 0 auto;
                }
            }
            &.ispart-line {
                .part+.part{
                    border-top: 1px solid #f1f1f1;
                }
            }
        }
    }
    .msg-icon{
        position: relative;
        .icon-news{
            font-size: 0.36rem;
        }
        .new-active{
            width: 0.12rem;
            height: 0.12rem;
            background-color: #F47340;
            border-radius: 0.05rem;
            display: block;
            position: absolute;
            right: 0;
            top: -0.02rem;
        }
    }
}
</style>
