import React from 'react';
import ReactEcharts from 'components/ReactECharts';
import CHARTCONFIG from 'constants/ChartConfig';

const area = {};
area.options = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Coin In', 'Coin Out'],
    textStyle: {
      color: CHARTCONFIG.color.text
    }
  },
  toolbox: {
    show: false
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      data: ['1/1', '2/1', '3/1', '4/1', '5/1', '6/1', '7/1', '8/1'],
      axisLabel: {
        textStyle: {
          color: CHARTCONFIG.color.text
        }
      },
      splitLine: {
        lineStyle: {
          color: CHARTCONFIG.color.splitLine
        }
      }
    }
  ],
  yAxis: [
    {
      max: 100,
      axisLabel: {
        textStyle: {
          color: CHARTCONFIG.color.text
        }
      },
      splitLine: {
        lineStyle: {
          color: CHARTCONFIG.color.splitLine
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: CHARTCONFIG.color.splitArea
        }
      }
    }
  ],
  series: [
    {
      name: 'Coin In',
      type: 'bar',
      data: [17, 11, 22, 35, 76, 40, 28, 25],
      itemStyle: {
        normal: {
          color: CHARTCONFIG.color.info
        }
      },
      lineStyle: {
        normal: {
          color: CHARTCONFIG.color.info
        }
      },
      areaStyle: {
        normal: {
          color: CHARTCONFIG.color.info
        }
      },
      symbol: 'diamond'
    },
    {
      name: 'Coin Out',
      type: 'bar',
      barCategoryGap: '35%',
      data: [15, 13, 20, 40, 81, 37, 26, 26],
      itemStyle: {
        normal: {
          color: CHARTCONFIG.color.success
        }
      },
      lineStyle: {
        normal: {
          color: CHARTCONFIG.color.success
        }
      },
      areaStyle: {
        normal: {
          color: CHARTCONFIG.color.success
        }
      },
      symbol: 'diamond'
    }
  ]
};

const Chart = () => (
  <ReactEcharts style={{height: '400px'}} option={area.options} showLoading={false} />
);

module.exports = Chart;
