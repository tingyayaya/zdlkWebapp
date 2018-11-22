<template>
  <div class="picker-pic">
      <div class="pic-box" :style="{backgroundImage: 'url('+item+')'}" v-for="(item,index) in imgsBase64" >
          <div class="delete" @click="delete2(index)"><i class="icon-z icon-z-arrow-delete"></i></div>
      </div>
     
      <div class="add-box" v-show="dispearla">
          <input type="file" @change="getImages" class="files" ref="feedbakcImg" multiple accept='image/*'>
          <i class="icon iconfont icon-add-img"></i>
      </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  name: 'picker-pic',
  data() {
    return {
      imgs: '',     //上传用的
      imgsBase64: [],   //显示用的
      imgsBase64Temp:[],
      dispearla: true,
    }
  },
  created() {
    var arr1= [1,'354546',2,'ere',8,4,454, 'ere']
    var arr2= [4,454, 'ere'];
    
  },
  methods: {
    getImages(e){
      var self = this;
      var oFiles = e.target.files;
      var formData = new FormData();

      
      //添加domainid参数
      formData.append("domainid","156");

      for(var i=0; i<oFiles.length; i++){
        formData.append(oFiles[i].name, oFiles[i]);
        var reader = new FileReader();
        reader.readAsDataURL(oFiles[i]);

        if(oFiles[i].size/1024>1025){
          reader.onload = function(){
            var base64 = this.result;
            self.dealImage(
              base64,
              {
                quality: 0.3
              },
              function(base){
                console.log(base.length/1024)
                self.imgsBase64.push(base);
                self.imgsBase64Temp.push(base)
              }
            )
          }
        }else{
          reader.onload = function(){
            var base64 = this.result;
            self.imgsBase64.push(base64)
            self.imgsBase64Temp.push(base64)
          }
        }
      }
      if(oFiles.length!=0){
        self.uploadApi(formData);
      }
      
    },
    uploadApi(formData){
      var self = this;
      self.$axios({
          method: 'post',
          url: self.baseurl.imgsurl,
          headers: { 'Content-Type': 'multipart/form-data' },
          data: formData
        })
        .then(function(res){
          if(res.data.code==0&&res.data.msg=='成功'){
           
           self.imgsBase64Temp.length = 0;
           self.$emit('getpick', res.data.data);
           self.$refs.feedbakcImg.value ='';

          }else{
            //失败
            //从显示列表中删除
            this.deleteArr(self.imgsBase64, self.imgsBase64Temp);
            
            var index = res.data.code;
            Toast({
                message: self.errorcode.arr[index],
                position: 'middle',
                duration: 5000
            });
          }
         
        })
    },
    dealImage(path, obj, callback){
      var img = new Image();
      img.src = path;
      img.onload = function(){
          var that = this;
          // 默认按比例压缩
          var w = that.width,
              h = that.height,
              scale = w / h;
          w = obj.width || w;
          h = obj.height || (w / scale);
          var quality = 0.7;  // 默认图片质量为0.7
          //生成canvas
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          // 创建属性节点
          var anw = document.createAttribute("width");
          anw.nodeValue = w;
          var anh = document.createAttribute("height");
          anh.nodeValue = h;
          canvas.setAttributeNode(anw);
          canvas.setAttributeNode(anh);

          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, w, w);

          ctx.drawImage(that, 0, 0, w, h);
          // 图像质量
          if(obj.quality && obj.quality <= 1 && obj.quality > 0){
              quality = obj.quality;
          }
          // quality值越小，所绘制出的图像越模糊
          var base64 = canvas.toDataURL('image/jpeg', quality);
          // 回调函数返回base64的值
          callback(base64);
      }
    },
    delete2(num){
      this.imgsBase64.splice(num, 1);
      this.imgs.splice(num, 1);
    },
    deleteArr(arr1, arr2){
      var a, b;
      for (var i = arr1.length - 1; i >= 0; i--) {
          a = arr1[i];
          for (var j = arr2.length - 1; j >= 0; j--) {
              b = arr2[j];
              if (a == b) {
                  arr1.splice(i, 1);
                  arr2.splice(j, 1);
                  break;
              }
          }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$border1: 1px solid #dedede;

.picker-pic{
  padding:0.2rem 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  .pic-box{
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      border: $border1;
      width: 1.34rem;
      height: 1.34rem;
      margin-bottom: 0.2rem;
      margin-right: 0.16rem;
      position: relative;
      .delete{
          position: absolute;
          top: 1px;
          right: 1px;
          width: 0.4rem;
          height: 0.4rem;
      }
  }
  .pic-box:nth-child(4),.pic-box:nth-child(8){
      margin-right: 0;
  }
  .add-box{
      width: 1.34rem;
      height: 1.34rem;
      border: 1px solid #dedede;
      position: relative;
      .icon-add-img{
          z-index: 2;
          color: #D8D8D8;
          font-size: 0.8rem;
          position: absolute;
          top:50%;
          left: 50%;
          transform: translate(-50%, -50%);
      }
      .files{
          z-index: 3;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          filter: alpha(opacity=0);
          width: 1.34rem;
          height: 1.34rem;
      }
  }
}
</style>

