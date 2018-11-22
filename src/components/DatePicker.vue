<template>
    <mt-datetime-picker
        ref="picker"
        type="date"
        year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
        v-model="pickerValue">
    </mt-datetime-picker>
</template>

<script>

export default {
    name: 'data-picker',
    data() {
        return {
            currentTages: '',
            popupVisible: false,
            pickerValue: true
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
   width: 3.2rem;
   float: left;
   text-align: left;
   padding-left: 0.2rem; 
   box-sizing: border-box;
}
.sure{
    padding-right: 0.2rem; 
    float: left;
    width: 3.2rem;
    text-align: right;
    box-sizing: border-box;
    color: #F47340;
}
</style>
