import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { SportComponent } from './sport/sport.component';
import { UbreunsComponent } from './ubreuns/ubreuns.component';
import { VisionComponent } from './vision/vision.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { StadtComponent } from './stadt/stadt.component';
import { PrivacyComponent } from './privacy/privacy.component';


//Module decorator specifying all the components used in the application 
@NgModule({
  declarations: [

     HomeComponent,
     StadtComponent,
     SportComponent,
     UbreunsComponent,
     VisionComponent,
     KontaktComponent,
     PrivacyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, 
  ],
  providers: [],
})
export class ComponentsModule {}
