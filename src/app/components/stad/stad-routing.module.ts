import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StadComponent } from './stad.component';

const routes: Routes = [
  { path: '', component: StadComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StadRoutingModule { }
