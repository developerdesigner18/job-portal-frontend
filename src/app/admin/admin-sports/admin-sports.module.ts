import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSportsRoutingModule } from './admin-sports-routing.module';
import { AdminSportsComponent } from './admin-sports.component';


@NgModule({
  declarations: [
    AdminSportsComponent
  ],
  imports: [
    CommonModule,
    AdminSportsRoutingModule
  ]
})
export class AdminSportsModule { }
