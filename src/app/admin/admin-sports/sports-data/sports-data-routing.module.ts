import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsDataComponent } from './sports-data.component';

const routes: Routes = [{ path: '', component: SportsDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsDataRoutingModule { }
