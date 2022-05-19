import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSportsComponent } from './admin-sports.component';

const routes: Routes = [{ path: '', component: AdminSportsComponent }, { path: 'sports-data', loadChildren: () => import('./sports-data/sports-data.module').then(m => m.SportsDataModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSportsRoutingModule { }
