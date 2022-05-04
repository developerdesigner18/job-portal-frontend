import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StadtComponent } from './stadt.component';

const routes: Routes = [
  { path: '', component: StadtComponent},{ path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StadtRoutingModule { }
