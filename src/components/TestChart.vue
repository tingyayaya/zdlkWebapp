<template>
    <div class="high-chart">
        <div id="container" style="width: 9.6rem; height: 6.4rem"></div>
    </div>
</template>

<script>
import HighCharts from 'highcharts'
import options from '@/chart-options/options2'

export default {
    name: 'test-chart',
    data() {
        let option = options.bar;
        return {
            option: option
        }
    },
    mounted() {
        //console.log(Date.UTC(2016,  9, 26, 15, 52, 40));
        console.log(typeof(Date.parse('2016-09-26 12:00:00')));
        console.log(Date.parse('2016-09-27'));
        console.log(Date.parse('2016-09-28'));
        console.log(Date.parse('2016-09-30'));
        HighCharts.setOptions({
            global: { useUTC: false }
        })
        var charts = HighCharts.chart('container', this.option)
    },
}
</script>

<style lang="scss" scoped>
.high-chart{
   width: 100%;
}
.border-t-20{
    border-top: 20px solid #f8f8f8;
}
.border-b-1{
    border-bottom: 1px solid #f1f1f1;
}
.border-l-6{
    border-left: 6px solid #AACB3C;
}
.section-h{
        @extend .border-t-20;
        .nav{
            height: 30px;
            padding: 15px 20px;
            background-color:#fff;
            p{
                height: 100%;
                @extend .border-l-6;
                padding-left: 22px;
                font-size: 20px;
                line-height: 30px;
            }
        }
        .part-content{
            display: flex;
            flex-flow: row nowrap;
            .part{
                flex:1;
                justify-content: space-around;
                text-align: center;
                padding:20px 0;
                span{
                    font-size: 24px;
                    color: #737373;
                    line-height: 50px;
                }
                p{
                    font-size: 20px;
                    span{
                        font-size: 36px;
                        color: #000;
                    }
                }
                &.contact{
                    text-align: left;
                    padding-left: 20px;
                    font-size: 24px;
                    span{
                        color: #FFC633
                    }
                }
                .box{
                    border: 1px solid #dedede;
                    width: 185px;
                    height: 126px;
                    margin: 0 auto;
                }
            }
        }
    }
</style>
