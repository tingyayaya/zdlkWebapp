<template>
    <div>
        <my-header :title="title" :left="flag"></my-header>
        <div class="issearch">
          <search-bar @searchUp="search($event)"></search-bar>
          <my-list :list="data" :listRightPic="true" listRightPicLink="cookDeView"></my-list>
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
                    title: '养颜护胃，五谷中最养人的就是它',
                    time: '2017-02-11',
                    img: 'http://img.hb.aicdn.com/f6f66c05e23457f8ac0f76e50091fb524d012261212b4-gQCLD6_fw658',
                    star: '335',
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
