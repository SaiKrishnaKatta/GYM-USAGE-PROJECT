import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule, navigationRoutes } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AddSchemeComponent } from './add-scheme/add-scheme.component';
// import { AddPlanComponent } from './add-plan/add-plan.component';

@NgModule({
  declarations: [
    navigationRoutes,
    DashboardComponent    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
