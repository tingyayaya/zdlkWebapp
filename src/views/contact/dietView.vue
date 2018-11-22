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
import Empty from '@/components/Empty'

export default {
    name: 'diet-view',
    components: { MyHeader, ConList, Empty },
    data() {
        return {
            userInfoState: JSON.parse(localStorage.getItem('userInfoState')).userInfoState,
            title: '我的营养师',
            flag: true,
            isshow: true,
            list:[]
        }
    },
    created(){
      this.getData();
    },
    methods: {
      getData() {
      
        var self = this;
        this.$axios({
          methods: 'post',
          url: self.baseurl.viewer+'/My_dietitian.jsp',
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
              obj['tel'] = res.data.data[i]['skt30.skf339'];
              obj['name'] = res.data.data[i]['skt30.skf335'];
              obj['technicalTitle'] = res.data.data[i]['skt30.skf2781'];
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
