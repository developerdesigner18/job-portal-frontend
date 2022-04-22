import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StadtComponent } from './stadt.component';

const routes: Routes = [
  { path: '', component: StadtComponent},{ path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) }];



  // const routes: Routes = [{ path: '', component: AdminComponent },{ path: 'admin-dashboard', loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },
  // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StadtRoutingModule { }
