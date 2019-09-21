import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { AddSchemeComponent } from './add-scheme/add-scheme.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent,
    children: [
      {
          path:"addPlan",
          component:AddPlanComponent
        },
        {
          path:"addScheme",
          component:AddSchemeComponent
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
export const navigationRoutes = [ DashboardComponent,AddPlanComponent,AddSchemeComponent]
