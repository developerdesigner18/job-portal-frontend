import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';
import { aboutusComponent } from './aboutus.component';
import { aboutsusRoutingModule } from './aboutus-routing.module';

@NgModule({
  declarations: [
    aboutusComponent
  ],
  imports: [
    CommonModule,
    aboutsusRoutingModule,
    NgxPaginationModule
  ],
})
export class aboutusModule { }
