import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsPartnerRoutingModule } from './sports-partner-routing.module';
import { SportsPartnerComponent } from './sports-partner.component';


@NgModule({
  declarations: [
    // SportsPartnerComponent
  ],
  imports: [
    CommonModule,
    SportsPartnerRoutingModule
  ]
})
export class SportsPartnerModule { }
