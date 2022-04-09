import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { aboutusComponent } from './aboutus.component';

const routes: Routes = [
  { path: '', component: aboutusComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class aboutsusRoutingModule { }
