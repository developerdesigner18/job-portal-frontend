import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSportsRoutingModule } from './admin-sports-routing.module';
import { AdminSportsComponent } from './admin-sports.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    AdminSportsComponent
  ],
  imports: [
    CommonModule,
    NgImageSliderModule,
    AdminSportsRoutingModule
  ]
})
export class AdminSportsModule { }
