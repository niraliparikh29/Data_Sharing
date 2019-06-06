import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: '',
    component: CompanyComponent
  }
];


@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CompanyModule { }
