import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsBlogsRoutingModule } from './sports-blogs-routing.module';
import { SportsBlogsComponent } from './sports-blogs.component';


@NgModule({
  declarations: [
    // SportsBlogsComponent
  ],
  imports: [
    CommonModule,
    SportsBlogsRoutingModule
  ]
})
export class SportsBlogsModule { }
