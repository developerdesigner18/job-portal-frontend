import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContactUsComponent } from './admin-contact-us.component';

const routes: Routes = [{ path: '', component: AdminContactUsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminContactUsRoutingModule { }
