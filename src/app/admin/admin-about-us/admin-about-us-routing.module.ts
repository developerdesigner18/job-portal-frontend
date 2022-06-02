import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAboutUsComponent } from './admin-about-us.component';

const routes: Routes = [{ path: '', component: AdminAboutUsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAboutUsRoutingModule { }
