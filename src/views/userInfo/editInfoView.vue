<template>
    <div class="edit-info">
        <edit-text @inputV = "getValue($event)" v-if="type=='text'"></edit-text>
        <edit-tel @inputV = "getValue($event)" v-if="type=='tel'"></edit-tel>
    </div>
</template>

<script>
import EditText from '@/components/form/EditText'
import EditTel from '@/components/form/EditTel'

export default {
    data() {
       return {
           type: ''
       }
    },
    created() {
        this.type = this.$route.query.type;
    },
    methods: {
        getValue(e) {
          this.message = e;
        }
    },
    components: { EditText, EditTel }
}
</script>

<style lang="scss">
.edit-info{
    height: 100%;
    background: #f8f8f8;
}
</style>
