<template>
    <div>
        <my-header :title="title" :left="flag"></my-header>
        <div class="issearch">
          <search-bar @searchUp="search($event)"></search-bar>
          <my-list :listRightPic="true" listRightPicLink="questionDeView" :list="data"></my-list>
        </div>
    </div>
</template>
<script>
import MyHeader from '@/components/MyHeader';
import MyList from '@/components/MyList';
import SearchBar from '@/components/SearchBar';

export default {
    components: { MyHeader, MyList, SearchBar },
    data() {
        return {
            title: '搜索',
            flag: true,
            data: [
                {
                    img: 'http://img.hb.aicdn.com/1ec89f7633150fb0e9c28b0a40c956b60a65f54526a34-Eqaxel_fw658',
                    title: '营养指导，让你健康瘦身',
                    time: '2017-02-11',
                    id: '123'
                }
            ]
        }
    },
    methods: {
       search(e) {
           console.log(e)
       }
    }
}
</script>

<style>

</style>
