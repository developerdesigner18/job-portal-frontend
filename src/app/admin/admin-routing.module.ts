import { NgModule } from '@angular/core';
import {Routes ,RouterModule} from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
{ path: '',redirectTo:'admin-login', pathMatch: 'full' },
// { path: '',component:AdminComponent },
{ path: 'admin-login', loadChildren: () => import('./admin-login/admin-login.module').then(m => m.AdminLoginModule) },
{ path: 'admin-dashboard', loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },
{ path: 'admin-sports', loadChildren: () => import('./admin-sports/admin-sports.module').then(m => m.AdminSportsModule) },
{ path: 'admin-jobs', loadChildren: () => import('./admin-jobs/admin-jobs.module').then(m => m.AdminJobsModule) },
{ path: 'admin-stadt', loadChildren: () => import('./admin-stadt/admin-stadt.module').then(m => m.AdminStadtModule) },
{ path: 'admin-users', loadChildren: () => import('./admin-users/admin-users.module').then(m => m.AdminUsersModule) },
{ path: 'admin-home', loadChildren: () => import('./admin-home/admin-home.module').then(m => m.AdminHomeModule) },
{ path: 'admin-imprint', loadChildren: () => import('./admin-imprint/admin-imprint.module').then(m => m.AdminImprintModule) },
{ path: 'admin-contact-us', loadChildren: () => import('./admin-contact-us/admin-contact-us.module').then(m => m.AdminContactUsModule) },
{ path: 'admin-about-us', loadChildren: () => import('./admin-about-us/admin-about-us.module').then(m => m.AdminAboutUsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
