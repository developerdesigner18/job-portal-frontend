import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { SportComponent } from './sport/sport.component';
import { aboutusComponent } from './aboutus/aboutus.component';
import { VisionComponent } from './vision/vision.component';
import { contactusComponent } from './contactus/contactus.component';
import { StadtComponent } from './stadt/stadt.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { AgbComponent } from './agb/agb.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminComponent } from '../admin/admin.component';
import { TravelDataComponent } from './travel-data/travel-data.component';

//Module decorator specifying all the components used in the application 
@NgModule({
  declarations: [
     HomeComponent,
     StadtComponent,
     SportComponent,
     aboutusComponent,
     VisionComponent,
     contactusComponent,
     PrivacyComponent,
     ImprintComponent,
     AgbComponent,
     TravelDataComponent,
     AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, 
    NgImageSliderModule,
    NgxPaginationModule
  ],
 
  providers: [],
})
export class ComponentsModule {}
