<template>
    <div>
       <h1>chart.js</h1>
        <bar-chart></bar-chart>
        <line-chart></line-chart>
    </div>
</template>


<script>

import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';

export default {
  components : {
    BarChart,
    LineChart,
  }
}
</script>

<style>

</style>