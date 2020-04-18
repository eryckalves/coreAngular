import { Component, OnInit } from '@angular/core';
import {LINE_CHART_COLORS} from '../../shared/chart.colors';
import { ChartDataSets} from 'chart.js';

const LINE_CHART_SAMPLE_DATA: ChartDataSets[] = [
  { data: [32, 14, 46, 23, 38, 56], label: 'Sentiment Analysis'},
  { data: [12, 18, 26, 13, 28, 26], label: 'Image Recognition'},
  { data: [52, 34, 49, 53, 68, 62], label: 'Forecasting'},
];
const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-lineChart',
  templateUrl: './lineChart.component.html',
  styleUrls: ['./lineChart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any ={
    responsive: true
  };
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;


  ngOnInit() {
  }

}
