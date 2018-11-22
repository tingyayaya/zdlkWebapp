<template>
    <div id="container"></div>
</template>

<script>
import Highcharts from 'highcharts'
import highmaps from 'highcharts/modules/map'

highmaps(Highcharts)

const superagent = require('superagent')
const jsonp = require('superagent-jsonp')

export default {
    name: 'my-map',
    data() {
       return {
            data: [
                {
                        name: '重庆',
                        value: 5000
                },{
                        name: '上海',
                        value: 2000
                },{
                        name: '广东',
                        value: 2200
                },{
                        name: '福建',
                        value: 1000
                }
            ],
            mapdata :'',
       }
     },
    methods: {
       getJson() {
           superagent.get('https://data.jianshukeji.com/jsonp?filename=geochina/china.json')
           .use(jsonp({
               timeout: 3000,
               callbackName: 'callback'
           }))
           .end((err, res) => {
               this.mapdata = res.body
               //console.log(res.body);
               if(res.body){
                    //console.log(this.mapdata)
                    Highcharts.mapChart('container',{
                        title: {
                            text: null
                        },
                        credits:{
                            enabled: false // 禁用版权信息
                        },
                        legend:{
                            enabled: false
                        },
                        series: [{
                            data: this.data,
                            mapData: this.mapdata,
                            joinBy: ['name'],
                            name: '中国地图'
                        }]
                    })
               }
               
           })
       }
    },
    created() {
        this.getJson();
    }
}
</script>

<style lang="scss" scoped>
#container{
    width: 6rem;
    padding: 0.2rem;
    height: 5rem;
    z-index: 99;
}
</style>
