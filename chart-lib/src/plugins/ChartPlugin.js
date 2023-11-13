import Chart from 'chart.js/auto';

export default {

    install(Vue) {
        // console.log('chart plugin loaded');
        Vue.prototype.$_Chart = Chart;
    }
}