import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path:'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
