import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { CompanyComponent } from '../company/company/company.component';
import { EmployeeComponent } from '../company/employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [HomeComponent,CompanyComponent,EmployeeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
