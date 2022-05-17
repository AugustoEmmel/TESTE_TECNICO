<template>
  <div id="chartContainer" @click="exibirAcao"></div>
</template>

<script>
import CanvasJS from "../services/canvasjs.stock.min.js";
export default {
  props: ["acoes_Pessoais", "acaoNome"],
  data() {
    return {
      stockVariance: {},
    };
  },
  methods: {
    exibirAcao() {
      console.log(this.acaoNome);
      console.log(this.acoes_Pessoais);
    },
    montarGrafico() {
      var dataPoints = [],
        currentDate = new Date(),
        rangeChangedTriggered = false;
      var stockChart = new CanvasJS.StockChart("chartContainer", {
        theme: "light2",
        title: {
          text: `Cotação ${this.acaoNome}`,
        },
        rangeChanged: function (e) {
          rangeChangedTriggered = true;
        },
        charts: [
          {
            axisX: {
              crosshair: {
                enabled: true,
                valueFormatString: "MMM DD, YYYY HH:mm:ss",
              },
            },
            axisY: {
              title: "Cotação",
              stripLines: [
                {
                  showOnTop: true,
                  lineDashType: "dash",
                  color: "#ff4949",
                  labelFontColor: "#ff4949",
                  labelFontSize: 14,
                },
              ],
            },
            toolTip: {
              shared: true,
            },
            data: [
              {
                type: "line",
                name: "Cotação",
                xValueFormatString: "MMM DD, YYYY HH:mm:ss",
                xValueType: "dateTime",
                dataPoints: dataPoints,
              },
            ],
          },
        ],
        navigator: {
          slider: {
            minimum: new Date(currentDate.getTime() - 90 * 1000),
          },
        },
        rangeSelector: {
          enabled: false,
        },
      });
      var dataCount = 700,
        ystart = this.acoes_Pessoais[this.acaoNome].preco,
        interval = 1000,
        xstart = currentDate.getTime() - 700 * 1000;

      var updateChart = (xstart, ystart, length, interval) => {
        var xVal = xstart,
          yVal = ystart;
        for (var i = 0; i < length; i++) {
          yVal = this.acoes_Pessoais[this.acaoNome].preco;
          yVal = Math.round(yVal * 100) / 100;
          dataPoints.push({ x: xVal, y: yVal });
          xVal += interval;
        }
        if (!rangeChangedTriggered) {
          stockChart.options.navigator.slider.minimum = new Date(
            xVal - 90 * 1000
          );
        }
        stockChart.options.charts[0].axisY.stripLines[0].value =
          dataPoints[dataPoints.length - 1].y;
        stockChart.options.charts[0].axisY.stripLines[0].label =
          stockChart.options.charts[0].axisY.stripLines[0]["value"];
        xstart = xVal;
        dataCount = 1;
        ystart = yVal;
        stockChart.render();
        setTimeout(function () {
          updateChart(xstart, ystart, dataCount, interval);
        }, 1000);
      };
      updateChart(xstart, ystart, dataCount, interval);
    },
  },
  watch: {
    acaoNome(newVal, oldVal) {
      this.montarGrafico();
    },
  },
};
</script>

<style>
#chartContainer {
  width: 100%;
}
</style>