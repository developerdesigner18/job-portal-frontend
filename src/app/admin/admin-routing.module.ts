import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: '', component: AdminComponent },{ path: 'admin-dashboard', loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
