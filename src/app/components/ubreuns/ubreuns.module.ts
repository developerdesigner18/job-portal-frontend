import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UbreunsRoutingModule } from './ubreuns-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { UbreunsComponent } from './ubreuns.component';

@NgModule({
  declarations: [
    UbreunsComponent
  ],
  imports: [
    CommonModule,
    UbreunsRoutingModule,
    NgxPaginationModule
  ],
})
export class UbreunsModule { }
