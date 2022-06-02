import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsBlogsComponent } from './sports-blogs.component';

const routes: Routes = [{ path: '', component: SportsBlogsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsBlogsRoutingModule { }
