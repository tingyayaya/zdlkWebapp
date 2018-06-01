<template>
    <div class="high-charts">
        <div id="container" style="width: 185px; height: 126px;">

        </div>
    </div>
</template>

<script>
import HightCharts from 'highcharts'
import options from '../chart-options/options'

export default {
    name: 'high-charts',
    data() {
        return {
            option: options.bar
        }
    },
    mounted() {
        HightCharts.chart('container', this.option)
    }
}
</script>

<style>

</style>
