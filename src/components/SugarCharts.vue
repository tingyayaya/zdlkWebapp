<template>
    <div class="high-chart">
        <div id="container" style="width: 9.6rem; height: 6.4rem"></div>
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
