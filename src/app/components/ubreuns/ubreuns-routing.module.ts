import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbreunsComponent } from './ubreuns.component';

const routes: Routes = [
  { path: '', component: UbreunsComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbreunsRoutingModule { }
