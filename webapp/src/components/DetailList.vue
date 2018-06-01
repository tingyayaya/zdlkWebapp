<template>
    <div>
        <div class="title">
            <p>{{list.title}}</p>
            <i class="icon iconfont icon-icon-time"></i>
            <span>{{list.time}}</span>
        </div>
        <div class="content">
            {{list.content}}
        </div>
    </div>
</template>

<script>
export default {
    name: "detail-list",
    props: [ 'list' ]
}
</script>

<style>

</style>
