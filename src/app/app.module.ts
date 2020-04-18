import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../routers/route';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionSalesComponent } from './sections/SectionSales/SectionSales.component';
import { SectionOrdersComponent } from './sections/SectionOrders/SectionOrders.component';
import { SectionHealthComponent } from './sections/SectionHealth/SectionHealth.component';

import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './charts/barChart/barChart.component';
import { LineChartComponent } from './charts/lineChart/lineChart.component';
import { PieChartComponent } from './charts/pieChart/pieChart.component';
import { ServerComponent } from './serverStatus/server.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      SidebarComponent,
      SectionSalesComponent,
      SectionOrdersComponent,
      SectionHealthComponent,
      BarChartComponent,
      LineChartComponent,
      PieChartComponent,
      ServerComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ChartsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
