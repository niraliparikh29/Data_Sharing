import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompanyRoutingModule } from './../company/company-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  {
    path: '',
    component: CompanyComponent
  },
  {
    path:'employee',
    component : EmployeeComponent
  }
];


@NgModule({
  declarations: [CompanyComponent,EmployeeComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CompanyModule { }
