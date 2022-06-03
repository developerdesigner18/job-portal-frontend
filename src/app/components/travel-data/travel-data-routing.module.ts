import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelDataComponent } from './travel-data.component';

const routes: Routes = [{ path: '', component: TravelDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelDataRoutingModule { }
