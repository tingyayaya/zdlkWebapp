<template>
    <div>
        <my-header :title="title" :left="flag"></my-header>
        <div class="isheader">
            <con-list :list="list" :isshow="isshow"></con-list>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import ConList from '@/components/ConList'

export default {
    name: 'diet-view',
    components: { MyHeader, ConList },
    data() {
        return {
            userInfoState: JSON.parse(localStorage.getItem('userInfoState')).userInfoState,
            title: '我的医生',
            flag: true,
            isshow: true,
            list:[]
        }
    },
    created() {
       this.getData();
    },
    methods: {
      getData() {
      
        var self = this;
        this.$axios({
          methods: 'post',
          url: self.baseurl.viewer+'/My_Doctor.jsp',
          params: {
            token: '',
            id: this.userInfoState.vipID
          }
        })
        .then(function(res){
          console.log(res)
          var len =res.data.data.length; 
          if(res.data.code==0&&res.data.data.length!=''){
            for(var i=0; i<len; i++){
              var obj = {};
              obj['tel'] = res.data.data[i]['skt117.skf1850'];
              obj['name'] = res.data.data[i]['skt117.skf1842'];
              obj['technicalTitle'] = res.data.data[i]['skt117.skf1855'];
              self.list.push(obj);
            }
          }
        })
      }
    }
    
}
</script>

<style>

</style>
