import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsPartnerComponent } from './sports-partner.component';

const routes: Routes = [{ path: '', component: SportsPartnerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsPartnerRoutingModule { }
