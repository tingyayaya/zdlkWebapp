<template>
    <div class="my-report">
        <my-header :left="true" :title="title">
             <div slot="upload" class="filebox">
                <a>上传</a>
                <input type="file"  @change="update" accept="image/png,image/jpg" class="imgfile">
            </div>
        </my-header>
        <div class="mypic" v-show="!isShow">
            <div v-for="item in imgList" class="mypicbox">
                <div  :style="{backgroundImage: 'url('+ item.url +')'}" @click="viewImg(item.url)" class="mypic0">
                    <!-- <img :src="item" alt="" @click="viewImg(item)" > -->
                </div>
                <span>{{item.time}}</span>
            </div>
        </div>
        <div class="view-img isheader" v-show="isShow">
            <div>
                 <img :src="viewPic" @click="smallImg(viewPic)">
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'

export default {
     data() {
         return {
             WHClass: '',
             title: '我的体检报告',
             viewPic: '',
             isShow: false,
             imgList2:[],
             imgList: [
                 {
                     url: 'http://img.hb.aicdn.com/53f61d3c8b4f99d60f07ed1803d3cbb3f83f1ccb12294-6AOUmx_fw658',
                     time: '2017-03-05'
                 },
                 {
                     url:  'http://img.hb.aicdn.com/c13b28233bc4262186ac93f35021ea09860500421316f8-Nf63qu_fw658',
                     time: '2017-03-02'
                 },
                 {
                     url: 'http://img.hb.aicdn.com/60deda11903d77f9f94513ebc1e992507ec0683738c48-TmYSrJ_fw658',
                     time: '2018-06-01'
                 }
             ]
         }
     },
     methods:{
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
     computed: {
        
     },
     created(){
        
     },
     components: { MyHeader }
}
</script>

<style lang="scss">
.my-report{
    height: 100%;
}
.filebox{
    position: relative;
    width: 80px;
    height: 60px;
    a{  
        display: inline-block;
        width: 80px;
        height: 60px;
        top: 0;
        left: 0;
        position: absolute;
        z-index: 92;
        text-align: center;
        line-height: 60px;
    }
    .imgfile{
        position: absolute;
        top: 0;
        left: 0;
        filter: alpha(opacity=0);
        opacity: 0;
        width: 80px;
        height: 60px;
        z-index: 99;
    }
}
   .mypic{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       padding:  108px 25px 25px;
       .mypicbox{
           margin-bottom: 25px;
           text-align: center;
           font-size: 26px;
           color:#888;
           line-height: 60px;
           .mypic0{
                width: 280px;
                height: 280px;
                border: 1px solid #dedede;
                //overflow: hidden;
                background-position: center center;
                background-size: cover;
                background-repeat: no-repeat;
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
       padding:  108px 25px 25px;
       box-sizing: border-box;
       text-align: center;
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
