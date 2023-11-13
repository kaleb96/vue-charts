<template>
    <canvas ref="barChart" id="barChart"></canvas>
</template>

<script>
export default {
    props: ['propsdata'],
    mounted() {
      this.renderBarChart();
    },
    
    methods: {
      renderBarChart() {
          // new Chart(document.getElementById('barChart'), {
          // new Chart(this.$refs.barChart, {
          new this.$_Chart(this.$refs.barChart, {
            type: 'bar',
            data: {
            labels: this.propsdata.map(row => row.year),
            // labels: this.propsdata,
            datasets: [
              {
                label: 'TEST Bar Chart',
                data: this.propsdata.map(row => row.count)
                // data: this.propsdata
              }]
            }
          }
        );
      }
    }  
}
</script>

<style>

</style>