import React from 'react';
import ReactEcharts from 'components/ReactECharts';
import CHARTCONFIG from 'constants/ChartConfig';

const line1 = {};

line1.options = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Highest Price', 'Lowest Price'],
    textStyle: {
      color: CHARTCONFIG.color.text
    }
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {show: true, title: 'save'}
    }
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
      axisLabel: {
        formatter: '{value}',
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
      type: 'value',
      axisLabel: {
        formatter: '{value} k$',
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
      name: 'Highest Price',
      type: 'line',
      data: [11, 11, 15, 13, 12, 13, 10],
      markPoint: {
        data: [
          {type: 'max', name: 'Max'},
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: 'Average'}
        ]
      }
    },
    {
      name: 'Lowest Price',
      type: 'line',
      data: [10, 5, 7, 8, 10, 5, 4],
      markPoint: {
        data: [
            {name: 'Lowest Price', value: 4, xAxis: 6, yAxis: 4}
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: 'Average'}
        ]
      }
    }
  ]
};

const Line = () => (
    <ReactEcharts style={{height: '400px'}} option={line1.options} showLoading={false} />   
);
  
  module.exports = Line;