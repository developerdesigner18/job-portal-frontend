import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSportsComponent } from './admin-sports.component';

const routes: Routes = [{ path: '', component: AdminSportsComponent }, 
{ path: 'sports-data', loadChildren: () => import('./sports-data/sports-data.module').then(m => m.SportsDataModule) }, 
{ path: 'sports-partner', loadChildren: () => import('./sports-partner/sports-partner.module').then(m => m.SportsPartnerModule) }, 
{ path: 'sports-blogs', loadChildren: () => import('./sports-blogs/sports-blogs.module').then(m => m.SportsBlogsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSportsRoutingModule { }
