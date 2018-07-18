module.exports = {
    bar: {
        chart: {
            type: 'spline'  //曲线图
        },
        title: {
            text: '尿酮曲线变化2',
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
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%m-%d',
            }
        },
        yAxis: {
            title:{
                text: null
            },
            allowDecimals:false,
            alternateGridColor: '#FAFAFA',
            //tickAmount: 5,
            gridLineColor: '#f8f8f8',
            labels: {
                formatter: function () {
                        if(this.value>0){
                            return this.value + '+';
                        }else{
                            return this.value
                        }
                }
            },
            tickPositions: [0, 1, 2, 3, 4]
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
                    console.log(e)
                }
            },
            data:[
                [1474848000000, parseInt('1+') ],
                [1474934400000, parseInt('1+') ],
                [1475020800000, 2],
                [1475193600000, 3]
                // [Date.parse('2016-09-27 15:52:40'), parseInt('2+') ],
                // [Date.parse('2016-09-28 15:52:40'), parseInt('3+') ],
            ]
        }]
    }
}