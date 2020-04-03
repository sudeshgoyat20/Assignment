import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { CommonModule } from '@angular/common'; 
import { DashboardComponent } from './dashboard.component';
 import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    
    CommonModule,MaterialModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
