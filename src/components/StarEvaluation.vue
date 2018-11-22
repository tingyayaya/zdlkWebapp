<template>
    <div class="star" >
          <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="icon iconfont" @click="selectStar(index,$event)" v-model="score"></span>
          {{score}}
    </div>
</template>

<script>
const LENGTH = 5;
const CLS_ON = 'icon-Star_on'; // 全星
const CLS_HALF = 'icon-Star_half'; // 半星
const CLS_OFF = 'icon-Star_off'; // 空星

export default {
    name: 'star-eval',
    data() {
        return{
            score: '0.0'
        }
    },
    props: {
        propScore: {
            type: Number
        }
    },
    methods: {
        selectStar(index, event) {
            this.score = index + 1;
           
            this.$emit('scores', this.score)
        }
    },
    computed: {
        itemClasses () {
            let result = []; // 返回的是一个数组,用来遍历输出星星
            let score = Math.floor(this.score * 2) / 2; // 计算所有星星的数量
            let hasDecimal = score % 1 !== 0; // 非整数星星判断
            let integer = Math.floor(score); // 整数星星判断
            for (let i = 0; i < integer; i++) { // 整数星星使用on
                result.push(CLS_ON);// 一个整数星星就push一个CLS_ON到数组
            }
            if (hasDecimal) { // 非整数星星使用half
                result.push(CLS_HALF);// 类似
            }
            while (result.length < LENGTH) { // 余下的用无星星补全,使用off
                result.push(CLS_OFF);// 类似
            }
            return result;
        }
    }
}
</script>

<style lang="scss" scoped>
.star{
   .iconfont{
       font-size: 0.36rem !important;
       margin-right: 0.15rem;
       cursor: pointer;
   }
}
</style>
