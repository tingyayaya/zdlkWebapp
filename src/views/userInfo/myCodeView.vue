<template>
      <div class="my-code isheader">
          <my-header :title="title" :left="true"></my-header>
          <div>
              <img :src="user.codeimg" alt="二维码">
              <p>扫一扫加为好友</p>
          </div>
      </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
export default {
    components: { MyHeader },
    data() {
        return {
            flag: false,
            title: '我的二维码',
            user: {
            name :'诸葛亮',
            codeimg: 'https://qr.api.cli.im/qr?data=who%2Bam%2BI&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=&blockpixel=12&marginblock=2&logourl=&size=400&text=&logoshape=&fontsize=30&fontfamily=msyh.ttf&fontcolor=%23000000&incolor=&outcolor=&qrcode_eyes=&background=&wper=0&hper=0&tper=0&lper=0&eye_use_fore=1&qrpad=10&kid=bizcliim&time=1528265230&key=a2b3d065aaed64d2c2b01ff1ae53e623'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.my-code{
    text-align: center;
    img{
        width:3.5rem;
        height: 3.5rem;
        margin-top: 1.5rem;
    }
}
</style>
