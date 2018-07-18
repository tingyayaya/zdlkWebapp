<template>
    <mt-popup v-model="popupVisible=show" position="bottom" class="mint-popup" >
        <mt-picker :slots="slots" @change="onValueChange" value-key="name" :showToolbar="true" ref="picker" :visibleItemCount="3" class="mypicker">
            <span @click="handleCancel" class="cancel">取消</span>
            <span @click="handleConfirm" class="sure">确认</span>
        </mt-picker>
    </mt-popup>
</template>

<script>
export default {
    name: 'my-picker',
    data() {
        return {
            currentTages: '',
            popupVisible: false
        }
    },
    created (){
        
    },
    props: {
        'slots': Array,
        'show': Boolean
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
           
            this.defaultShow = false;
            //console.log(this.currentTages)
            this.$emit('selectValue',[false,this.currentTages])
        },
        handleCancel() {
           
            this.$emit('selectValue',[false, null])
        }
    }

}
</script>

<style lang="scss" scoped>
.mint-popup{
    width: 100%;
}
.cancel{
   width: 320px;
   float: left;
   text-align: left;
   padding-left: 20px; 
   box-sizing: border-box;
   font-size: 28px;
}
.sure{
    padding-right: 20px; 
    float: left;
    width: 320px;
    text-align: right;
    box-sizing: border-box;
    color: #F47340;
    font-size: 28px;
}
</style>
