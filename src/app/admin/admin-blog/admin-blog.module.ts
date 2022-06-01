import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminBlogRoutingModule } from './admin-blog-routing.module';
import { AdminBlogComponent } from './admin-blog.component';


@NgModule({
  declarations: [
    AdminBlogComponent
  ],
  imports: [
    CommonModule,
    AdminBlogRoutingModule
  ]
})
export class AdminBlogModule { }
