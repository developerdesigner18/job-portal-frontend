import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSportsComponent } from './admin-sports/admin-sports.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SportsDataComponent } from './admin-sports/sports-data/sports-data.component';
import { AdminJobsComponent } from './admin-jobs/admin-jobs.component';
import { AdminStadtComponent } from './admin-stadt/admin-stadt.component';
import { AdminImprintComponent } from './admin-imprint/admin-imprint.component';
import { AdminContactUsComponent } from './admin-contact-us/admin-contact-us.component';
import { AdminAboutUsComponent } from './admin-about-us/admin-about-us.component';
import { SportsPartnerComponent } from './admin-sports/sports-partner/sports-partner.component';
import { SportsBlogsComponent } from './admin-sports/sports-blogs/sports-blogs.component';


@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminSportsComponent,
    AdminUsersComponent,
    AdminHomeComponent,
    AdminJobsComponent,
    AdminSportsComponent,
    AdminStadtComponent,
    SportsDataComponent,
    SportsPartnerComponent,
    SportsBlogsComponent,
    AdminImprintComponent,
    AdminContactUsComponent,
    AdminAboutUsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgImageSliderModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AdminModule { }
