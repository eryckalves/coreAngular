import {Routes, RouterModule} from "@angular/router";
import { NgModule } from '@angular/core';
import { SectionSalesComponent } from '../app/sections/SectionSales/SectionSales.component';
import { SectionOrdersComponent } from '../app/sections/SectionOrders/SectionOrders.component';
import { SectionHealthComponent } from '../app/sections/SectionHealth/SectionHealth.component';


const appRoutes: Routes = [
    {path:'sales', component: SectionSalesComponent},
    {path:'orders', component: SectionOrdersComponent},
    {path:'health', component: SectionHealthComponent},

    {path:'', redirectTo: '/sales', pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  