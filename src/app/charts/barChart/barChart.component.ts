import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  {data:[65, 59, 80, 81, 56, 55, 40], label:'Q3 Sales'},
  {data:[25, 39, 60, 91, 56, 45, 50], label:'Winter Sales'},
];

const SAMPLE_BARCHART_LABELS: string[] = ['W1','W2','W3','W4','W5','W6','W7'];

@Component({
  selector: 'app-barChart',
  templateUrl: './barChart.component.html',
  styleUrls: ['./barChart.component.css']
})
export class BarChartComponent implements OnInit {


  constructor() {  }


  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels:string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartOptions: any = {
    responsive: true,
    scaleShowVerticalLines: false
  };

  ngOnInit() {
  }

}
