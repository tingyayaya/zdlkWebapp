<template>
    <div class="edit-info">
        <edit-text @inputV = "getValue($event)" v-if="type=='text'">
            <span slot="unit" class="unit">{{current}}</span>
        </edit-text>
        <edit-tel @inputV = "getValue($event)" v-if="type=='tel'"></edit-tel>
        <edit-gender @inputV = "getValue($event)" v-if="type=='gender'"></edit-gender>
        <edit-codeid @inputV = "getValue($event)" v-if="type=='idCard'"></edit-codeid>
        
    </div>
</template>

<script>
import EditText from '@/components/form/EditText'
import EditTel from '@/components/form/EditTel'
import EditGender from '@/components/form/EditGender'
import EditCodeid from '@/components/form/EditCodeid'

export default {
    data() {
       return {
           type: '',
           units: ['cm', 'kg'],
           current: ''
       }
    },
    created() {
        this.type = this.$route.query.type;
        var c = this.$route.query.title;
        if(c == '体重'){
            this.current = this.units[1]
        }else if( c == '身高'|| c == '腰围' || c == '臀围' || c == '腿围' ) {
            this.current = this.units[0]
        }
    },
    methods: {
        getValue(e) {
          this.message = e;
        }
    },
    components: { EditText, EditTel, EditGender, EditCodeid }
}
</script>

<style lang="scss" scoped>
.edit-info{
    height: 100%;
    background: #f8f8f8;
}
.unit{
    position: absolute;
    line-height: 0.66rem;
    right: 0.2rem;
}
</style>
