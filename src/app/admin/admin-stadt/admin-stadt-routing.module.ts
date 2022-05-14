import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminStadtComponent } from './admin-stadt.component';

const routes: Routes = [{ path: '', component: AdminStadtComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminStadtRoutingModule { }
