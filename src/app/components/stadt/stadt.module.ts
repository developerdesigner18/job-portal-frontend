import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StadtRoutingModule } from './stadt-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    StadtRoutingModule
  ]
})
export class StadtModule { }
