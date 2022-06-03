import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsRoutingModule } from './components/components-routing.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { StadtComponent } from './components/stadt/stadt.component';
import { SportComponent } from './components/sport/sport.component';
import { AgbComponent } from './components/agb/agb.component';
import { TravelDataComponent } from './components/travel-data/travel-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    JobsComponent,
    StadtComponent,
    SportComponent,
    AgbComponent,
    TravelDataComponent
    // AdminSportsComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    AppRoutingModule,
    ComponentsRoutingModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
