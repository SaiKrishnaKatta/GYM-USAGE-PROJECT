import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordModule } from './dashbord.module';
import { AddSchemeComponent } from '../add-scheme/add-scheme.component';
import { dashbordComponent } from './dashbord.component';

const routes: Routes = [
  {
    path:"", component: dashbordComponent
  },
  {
    path:"addScheme", component: AddSchemeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
