import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '',redirectTo:'admin-login', pathMatch: 'full' },
// { path: '', component:  AdminComponent},
{ path: 'admin-login', loadChildren: () => import('./admin-login/admin-login.module').then(m => m.AdminLoginModule) },
{ path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
{ path: 'admin-users', loadChildren: () => import('./admin-users/admin-users.module').then(m => m.AdminUsersModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
