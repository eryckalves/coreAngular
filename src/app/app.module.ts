import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../routers/route';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionSalesComponent } from './sections/SectionSales/SectionSales.component';
import { SectionOrdersComponent } from './sections/SectionOrders/SectionOrders.component';
import { SectionHealthComponent } from './sections/SectionHealth/SectionHealth.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      SidebarComponent,
      SectionSalesComponent,
      SectionOrdersComponent,
      SectionHealthComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
