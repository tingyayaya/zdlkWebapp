<template>
    <mt-picker :slots="slots" @change="onValueChange" value-key="name" :showToolbar="true" ref="picker" :visibleItemCount="3" class="mypicker">
        <span @click="handleCancel" class="cancel">取消</span>
        <span @click="handleConfirm" class="sure">确认</span>
    </mt-picker>
</template>

<script>
export default {
    name: 'my-picker',
    data() {
        return {
            currentTages: '',
            slots: [{
                flex: 1,
                values: [
                    {
                        id: this.datetime(2),
                        name: '前天'
                    },{
                        id: this.datetime(1),
                        name: '昨天'
                    },{
                        id:this.datetime(0),
                        name: '今天'
                    }
                ],
                className: 'slot1',
                textAlign: 'center'
            }],
        }
    },
    created (){
        
    },
    
    methods: {
        onValueChange(picker, values) {
            //console.log(values);
            if (values[0] > values[1]) {
                picker.setSlotValue(1, values[0]);
            }
        },
        handleConfirm (){
            this.currentTages = this.$refs.picker.getValues()[0];
            //console.log(this.currentTages)
            this.$emit('selectValue',[false,this.currentTages])
        },
        handleCancel() {
           
            this.$emit('selectValue',[false, null])
        },
        formatNum(num){
            return num.toString().replace(/^(\d)$/, "0$1");
        },
        // 昨天前天 年月日
        datetime(N){
          var date = new Date();
          date.setDate(date.getDate()-N);
          return date.getFullYear() + '-' + this.formatNum(date.getMonth() + 1) + '-' + this.formatNum(date.getDate())
        }
    }

}
</script>

<style lang="scss" scoped>

.cancel{
   width: 3.2rem;
   float: left;
   text-align: left;
   padding-left: 0.2rem; 
   box-sizing: border-box;
   font-size: 0.28rem;
}
.sure{
    padding-right: 0.2rem; 
    float: left;
    width: 3.2rem;
    text-align: right;
    box-sizing: border-box;
    color: #F47340;
    font-size: 0.28rem;
}
</style>
