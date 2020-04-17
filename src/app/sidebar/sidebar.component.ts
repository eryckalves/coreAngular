import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  public Links = [
    {
      routePath:'/sales',
      routeName:'Section Sales'
    },
    {
      routePath:'/orders',
      routeName:'Latest Orders'
    },
    {
      routePath:'/health',
      routeName:'System Health'
    }

  ]

  ngOnInit() {
  }

}
