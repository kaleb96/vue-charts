<template>
  <canvas ref="lineChart" id="lineChart"></canvas>
</template>

<script>
export default {
    props: ['propsdata'],
    mounted() {
        this.renderChart();
    },
    
    methods: {
        renderChart() {
            // console.log(JSON.stringify(this.propsdata));
            // const ctx = document.getElementById('lineChart');
            // const ctx = this.$refs.lineChart
            // new Chart(ctx, {
            // new Chart(this.$refs.lineChart, {
            new this.$_Chart(this.$refs.lineChart, {
                type : 'line',
                data: {
                    labels: this.propsdata.labels,
                    datasets: [ this.propsdata.datasets]
                },
                options: {
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            })
        }
    }
}
</script>

<style>

</style>