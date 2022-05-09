import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSportsComponent } from './admin-sports.component';

const routes: Routes = [{ path: '', component: AdminSportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSportsRoutingModule { }
