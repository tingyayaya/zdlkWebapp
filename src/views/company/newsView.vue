<template>
    <div class="isnav">
        <my-list :list="list" :listRightPic="true" listRightPicLink="newsDetailView"></my-list>
    </div>
</template>

<script>
import MyList from '@/components/MyList'

export default {
    data() {
        return {
            list: [
                {
                    img: 'http://img.hb.aicdn.com/b87734aa50aceca53cc1cee9d145eb394054183960e23-HVnzLX_fw658',
                    title: '正大集团谢国民资深董事长出席博鳌亚洲论坛2018年年会',
                    time: '2017-02-11',
                    id: '123'
                },
                {
                    img: 'http://img.hb.aicdn.com/1ec89f7633150fb0e9c28b0a40c956b60a65f54526a34-Eqaxel_fw658',
                    title: '人力资源职能线第四批后备人才行动学习项目成功举办',
                    time: '2017-02-11',
                    id: '123'
                }
            ]
        } 
    },
    components: { MyList }
}
</script>

<style>

</style>
