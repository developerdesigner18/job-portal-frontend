import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
