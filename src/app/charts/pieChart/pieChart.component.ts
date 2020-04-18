import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pieChart',
  templateUrl: './pieChart.component.html',
  styleUrls: ['./pieChart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  pieChartData: number[] = [350,450,120];
  pieChartLabels: string[] = ['XYZ Logistics','Main st bakery','Tec mr Tok'];
  colors: any[] = [
    {
      backgroundColor:['#26547c','#ff6b6b','#ffd166'],
      borderColor:'#111'
    }
  ]
  pieChartType = 'pie';

  ngOnInit() {
  }

}
