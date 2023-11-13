<template>
    <div>
       <h1>chart.js</h1>
        <bar-chart v-bind:propsdata="barChartData"></bar-chart>
        <line-chart v-bind:propsdata="chartData"></line-chart>
    </div>
</template>


<script>

import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';

export default {
  components : {
    BarChart,
    LineChart,
  },

  data() {
    return {
      barChartData: [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ],

      chartData: {
        labels: ['January', 'Febuary', 'March', 'April', 'May'],
        datasets: {
            label: 'TEST Line Chart',
            backgroundColor:  'rgb(255,99, 132)',
            borderColor: 'rgb(255,99,132)',
            data: [65, 59, 80, 81, 56],
        }
      }
   }
  }
}
</script>

<style>

</style>