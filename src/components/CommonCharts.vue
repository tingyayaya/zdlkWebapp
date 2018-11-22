<template>
    <div class="high-chart">
        <div :id="containerId" style="height: 230px"></div>
        <div class="section-h">
            <div class="part-content bg-write">
                <div class="part contact"> 
                    <p>日期：</p>
                    <span>{{selectDate}}</span>
                </div>
                <div class="part contact"> 
                    <p>当前值：</p>
                    <span>{{selectValues}}</span>
                </div>
                <div class="part contact"> 
                    <p>与初始值差值：</p>
                    <span>{{selectDiff}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HighCharts from 'highcharts'
import NodataToDisplay from 'highcharts/modules/no-data-to-display.js';
NodataToDisplay(HighCharts);
// import options from '../chart-options/options'

export default {
    name: 'urine-charts',
    data() {
        return {
            chart: '',
            point: '',
            selectDate: '--',
            selectValues: '--',
            selectDiff: '--',
            option:{
                 noData: {
                    style: {
                      fontSize: '0.24rem',
                      color: '#303030'
                    }
                  },
                chart: {
                    type: 'spline'  //曲线图
                },
                title: {
                    text: '',
                    style: {"color": "#333333", "fontSize": "12px"}
                    
                },
                legend:{
                    enabled: false
                },
                xAxis: {
                    type: 'category',
                    title: {
                      text: null
                    }
                    // tickInterval: 4*24*3600*1000,
                    // dateTimeLabelFormats: {
                    //     day: '%m-%d'
                    // }
                },
                yAxis: {
                    title:{
                        text: null
                    },
                    allowDecimals:false,
                    alternateGridColor: '#FAFAFA',
                    //tickAmount: 5,
                    gridLineColor: '#f8f8f8',
                    
                },
                tooltip: {    //鼠标移动到数据点时提示框
                    enabled: false,
                },
                plotOptions: {
                    spline: {
                        marker: {
                          enabled: true
                        }
                    },
                    series: {
                      cursor: 'pointer',
                      events:{
                        
                      },
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
                    data:[]
                }]
            }
        }
    },
    props: ['dataList', 'chartTitle', 'initVal', 'containerId'],
    watch:{
      dataList(curVal, oldVal){
        var arr = curVal;
        this.chart.series[0].setData(arr);
      }
    },
    mounted() {
      var self = this;
      this.option.series[0].data = this.dataList;
      
      this.option.title.text = this.chartTitle;
      this.option.plotOptions.series.events.click=function(e){
        // var date = new Date(e.point.options.x);
        // self.selectDate = self.localString(date);
        self.selectDate = e.point.options.name;
        self.selectValues = e.point.options.y;
        self.selectDiff = e.point.options.y - sessionStorage.initVal;
        self.$emit('selectDate', self.selectDate)
      } 
      HighCharts.setOptions({
          global: { useUTC: true },
          lang: {
            noData: '暂无数据'
          }
      })
      this.chart = HighCharts.chart(self.containerId, this.option)
    },
    methods: {
       formatNum(num) {
        return num.toString().replace(/^(\d)$/, "0$1")    
       },
       localString(date){
          return date.getFullYear() + '-' + this.formatNum(date.getMonth() + 1) + '-' + this.formatNum(date.getDate());
       },
       controlDate(dada){
          var len = dada.length;
          var arr = []; 
          for(var i=0; i<len; i++){
            var reg = /^(\d+)-(\d{2})-(\d{2})$/;
            if(reg.test(dada[i].time)){
                var arr2 = [];
                arr2[0] = Date.parse(dada[i].time);
                arr2[1] = dada[i].value;
                arr.push(arr2);
            }
          }
          return arr;
       }
    }
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
                padding:20px 0;
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
