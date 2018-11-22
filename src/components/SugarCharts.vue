<template>
    <div class="high-chart">
        <div id="container" style="height: 230px;"></div>
        <div class="section-h">
            <div class="part-content bg-write">
                <div class="part contact"> 
                    <p>日期：</p>
                    <span id="date">--</span>
                </div>
                <div class="part contact"> 
                    <p>血糖值：</p>
                    <span id="values">--</span>
                </div>
                <div class="part contact"> 
                    <p>与初始值差值：</p>
                    <span id="dif">--</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HighCharts from 'highcharts'
// import options from '../chart-options/options'

export default {
    name: 'sugar-charts',
    data() {
        return {
            point: '',
            timex: [
                {
                    time: '2016-09-20 00:00:00',
                    value: '3.9'
                },
                {
                    time: '2016-09-21 00:00:00',
                    value: '4.1'
                },
                {
                    time: '2016-09-23 08:52:40',
                    value: '4.6'
                },
                {
                    time: '2016-09-24 15:52:40',
                    value: '5.8'
                },
                {
                    time: '2016-09-26 16:52:40',
                    value: '7.8'
                },
                {
                    time: '2016-09-27 12:52:40',
                    value: '5.0'
                },
                {
                    time: '2016-09-28 11:52:40',
                    value: '4.0'
                },
                {
                    time: '2016-09-30 15:52:40',
                    value: '6.3'
                },
                {
                    time: '2016-10-1 15:52:40',
                    value: '7.0'
                }
                
            ],
            option:{
                chart: {
                    type: 'spline'  //曲线图
                },
                title: {
                    text: '血糖曲线变化（单位：mmol/L）',
                    style: {"color": "#333333", "fontSize": "12px"}
                    
                },
                legend:{
                    enabled: false
                },
                xAxis: {
                    type: 'datetime',
                    title: {
                            text: null
                    },
                    dateTimeLabelFormats: {
                        day: '%m-%d',
                    }
                },
                yAxis: {
                    title:{
                        text: null
                    },
                    alternateGridColor: '#FAFAFA',
                    tickAmount: 6,
                    gridLineColor: '#f8f8f8'
                },
                tooltip: {    //鼠标移动到数据点时提示框
                    enabled: false,
                },
                plotOptions: {
                    spline: {
                        marker: {
                                enabled: true
                        }
                   }   
                },
                credits:{
                    enabled: false // 禁用版权信息
                },
                series: [{
                    name: 'point1',
                    color: '#5B873C',
                    cursor: 'pointer',
                    initVal: '3.9',
                    events:{
                        click: function(e){
                            Date.prototype.toLocaleString = function() {
                                return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate()
                            };
                            var date = new Date(e.point.options.x);
                            var commonTime = date.toLocaleString();
                            document.getElementById('date').innerHTML = commonTime;
                            document.getElementById('values').innerHTML=e.point.options.y+'mmol/L';
                            var dif = e.point.options.y - sessionStorage.initVal;
                           
                            document.getElementById('dif').innerHTML=dif.toFixed(1)+'mmol/L';
                            
                        }
                    },
                    data:[
                       
                    ]
                }]
            }
        }
    },
    mounted() {
        var len = this.timex.length;
        var arr = []; 
        for(var i=0; i<len; i++){
            //console.log(this.timex[i].value);
            var reg = /^(\d+)-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;
            if(reg.test(this.timex[i].time)){
                var arr2 = [];
                arr2[0] = this.changeDate(this.timex[i].time);
                arr2[1] = parseInt(this.timex[i].value);
                this.option.series[0].data.push(arr2);
            }
        }

        sessionStorage.initVal = '3.9';
        HighCharts.setOptions({
            lang:{
                months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                shortMonths : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            }
        })
        var charts = HighCharts.chart('container', this.option)
    },
    methods: {
       changeDate(time){
           var timeP = time.split(' ');
           //console.log(timeP[0]);
           return Date.parse(timeP[0]);
       }
    },

}
</script>

<style lang="scss" scoped>
.high-chart{
   width: 100%;
}
.border-t-20{
    border-top: 0.2rem solid #f8f8f8;
}
.border-b-1{
    border-bottom: 1px solid #f1f1f1;
}
.border-l-6{
    border-left: 0.06rem solid #AACB3C;
}
.section-h{
        @extend .border-t-20;
        .nav{
            height: 0.3rem;
            padding: 0.15rem 0.2rem;
            background-color:#fff;
            p{
                height: 100%;
                @extend .border-l-6;
                padding-left: 0.22rem;
                font-size: 0.2rem;
                line-height: 0.3rem;
            }
        }
        .part-content{
            display: flex;
            flex-flow: row nowrap;
            .part{
                flex:1;
                justify-content: space-around;
                text-align: center;
                padding:0.2rem 0;
                span{
                    font-size: 0.24rem;
                    color: #737373;
                    line-height: 0.5rem;
                }
                p{
                    font-size: 0.2rem;
                    span{
                        font-size: 0.36rem;
                        color: #000;
                    }
                }
                &.contact{
                    text-align: left;
                    padding-left: 0.2rem;
                    font-size: 0.24rem;
                    span{
                        color: #FFC633
                    }
                }
                .box{
                    border: 1px solid #dedede;
                    width: 1.85rem;
                    height: 1.26rem;
                    margin: 0 auto;
                }
            }
        }
    }
</style>
