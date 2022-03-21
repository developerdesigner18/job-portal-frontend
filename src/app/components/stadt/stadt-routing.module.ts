import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StadtComponent } from './stadt.component';

const routes: Routes = [
  { path: '', component: StadtComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StadtRoutingModule { }
