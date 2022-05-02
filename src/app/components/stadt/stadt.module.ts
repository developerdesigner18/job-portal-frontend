import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StadtRoutingModule } from './stadt-routing.module';
import { ListComponent } from './list/list.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    StadtRoutingModule,
    NgImageSliderModule,

  ]
})
export class StadtModule { }
