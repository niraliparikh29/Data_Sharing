import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CompanyModule } from '../company/company.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CompanyModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
