import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminImprintComponent } from './admin-imprint.component';

const routes: Routes = [{ path: '', component: AdminImprintComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminImprintRoutingModule { }
