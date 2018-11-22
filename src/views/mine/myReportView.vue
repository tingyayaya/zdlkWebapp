<template>
    <div class="my-report">
        <my-header :left="false" :title="title">
            <i class="icon-z icon-z-arrow-left"  @click="goback" slot="otherleft"></i>
            <div slot="upload" class="filebox">
                <router-link :to="{name: 'uploadReportView'}">
                上传
                </router-link>
                <!-- <input type="file"  @change="update" accept="image/png,image/jpg" class="imgfile"> -->
            </div>
        </my-header>
        <div class="mypic" v-if="imgList.length">
            <div v-for="item in imgList">
              <div  class="mypicbox" v-for="imgs in item.imgs">
                  <div  :style="{backgroundImage: 'url('+ imgs +')'}" @click="viewImg(imgs)" class="mypic0">
                      <!-- <img :src="item" alt="" @click="viewImg(item)" > -->
                  </div>
                  <span>{{item.title}}</span>
              </div>
            </div>
            
        </div>
        <no-data message="您还没有图片，请上传" v-if="!imgList.length"></no-data>
        <div class="view-img isheader" v-show="isShow"  @click="smallImg(viewPic)">
            <div>
                 <img :src="viewPic">
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import NoData from '@/components/NoData'

export default {
     data() {
         return {
             WHClass: '',
             title: '我的体检报告',
             viewPic: '',
             isShow: false,
             imgList2:[],
         }
     },
     computed:{
       imgList() {
         return this.$store.getters.getAmongPhoto
       }
     },
     created(){
      this.$store.dispatch('getAmongPhoto')
     },
     methods:{
       goback(){
          this.$router.push({name: 'mineView'})
       },
         viewImg(pic) {
             if(pic){
                 var height = document.body.clientWidth;
                 var width = document.body.clientHeight;

                 this.viewPic = pic;
                 this.isShow = true;
             }
         },
         smallImg(pic) {
             this.viewPic = '';
             this.isShow = false;

         },
         changeSize(item) {
            var img = new Image();
            img.src = item;
            var width = img.width;
            var height = img.height;
            return width+'/'+height
        },
        update(e){
            var self = this;
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function() {
                var base64 = reader.result;
                var obj={};
                obj.url = base64;
                obj.time = self.getNowTime();
                self.imgList.push(obj);
            }
        },
        getNowTime(){
            var myDate = new Date();
            var year = myDate.getFullYear();
            var month = myDate.getMonth();
            var day = myDate.getDay();
            return year+ '-' + month + "-" + day;
        }
     },
     components: { MyHeader, NoData }
}
</script>

<style lang="scss" scoped>
.my-report{
    height: 100%;
}
.filebox{
    position: relative;
    width: 0.8rem;
    height: 0.6rem;
    a{  
        display: inline-block;
        width: 0.8rem;
        height: 0.6rem;
        top: 0;
        left: 0;
        position: absolute;
        z-index: 92;
        text-align: center;
        line-height: 0.6rem;
    }
    .imgfile{
        position: absolute;
        top: 0;
        left: 0;
        filter: alpha(opacity=0);
        opacity: 0;
        width: 0.8rem;
        height: 0.6rem;
        z-index: 99;
    }
}

   .mypic{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       padding:  1.08rem 0.25rem 0.25rem;
       .mypicbox{
           margin-bottom: 0.25rem;
           text-align: center;
           font-size: 0.26rem;
           color:#888;
           line-height: 0.6rem;
           .mypic0{
                width: 2.8rem;
                height: 2.8rem;
                border: 1px solid #dedede;
                //overflow: hidden;
                background-position: center center;
                background-size: cover;
                background-repeat: no-repeat;
           }
           img{ 
                max-width: 100%;
                height: auto;
                cursor: pointer;
            }
           &.HWidth{
                img{
                    width: 100%;
                    cursor: pointer;
                }
           }
           &.WHeight{
               img{
                   height: 100%;
               }
           }
       }
   }
   .view-img{
       width: 100%;
       height: 100%;
       background: #fff;
       overflow: hidden;
       padding:  1.08rem 0.25rem 0.25rem;
       box-sizing: border-box;
       text-align: center;
       position: absolute;
       top: 0;
       div{ 
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            img{
                max-width: 100%;
                max-height: 100%;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
            }
       }
   }
</style>
