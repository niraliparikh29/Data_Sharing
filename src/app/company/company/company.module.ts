import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from '../employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent
  },
  {
    path:'employee',
    component :EmployeeComponent
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
