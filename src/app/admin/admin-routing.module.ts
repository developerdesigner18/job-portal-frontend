import { NgModule } from '@angular/core';
import {Routes ,RouterModule} from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
{ path: '',redirectTo:'admin-login', pathMatch: 'full' },
{ path: 'admin-login', loadChildren: () => import('./admin-login/admin-login.module').then(m => m.AdminLoginModule) },
{ path: 'admin-dashboard', loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
