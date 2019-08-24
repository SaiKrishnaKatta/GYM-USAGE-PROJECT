import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { AddSchemeComponent } from './add-scheme/add-scheme.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"AddPlan",
    component:AddPlanComponent
  },
  {
    path:"AddScheme",
    component:AddSchemeComponent
  },
  {
    path:"",
    component:DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
export const navigationRoutes = [ DashboardComponent,AddPlanComponent,AddSchemeComponent]
