import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminStadtRoutingModule } from './admin-stadt-routing.module';
import { AdminStadtComponent } from './admin-stadt.component';


@NgModule({
  declarations: [
    AdminStadtComponent
  ],
  imports: [
    CommonModule,
    AdminStadtRoutingModule
  ]
})
export class AdminStadtModule { }
