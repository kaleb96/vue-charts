<template>
  <canvas id="lineChart"></canvas>
</template>

<script>

import Chart from 'chart.js/auto';

export default {
    data() {
        return {
            chartData: {
                labels: ['January', 'Febuary', 'March', 'April', 'May'],
                datasets: [
                    {
                        label: 'My First Dataset',
                        borderColor: 'rgb(75, 192, 192)',
                        data: [65, 59, 80, 81, 56],
                    },
                ]
            }
        }
    },

    mounted() {
        this.renderChart();
    },
    
    methods: {
        renderChart() {
            const ctx = document.getElementById('lineChart');

            new Chart(ctx, {
                type : 'line',
                data: this.chartData,
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