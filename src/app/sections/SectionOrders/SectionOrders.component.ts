import { Component, OnInit } from '@angular/core';
import {Order} from '../../shared/order';
@Component({
  selector: 'app-SectionOrders',
  templateUrl: './SectionOrders.component.html',
  styleUrls: ['./SectionOrders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  //Order vem da pasta shared.orders.ts
  orders: Order[] = [
    {id: 1,customer:
      {id:1, name: 'teste1' , email:'teste@example.com', state:'CO'},
      total: 230 , placed: new Date(2020,12,1), 
      fulfilled: new Date(2020,1,1),
      status:'Completed'},
  ];

  ngOnInit() {
  }

}
