import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { ApisService } from './../apis.service';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];
@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [HttpClient,ApisService],
})
export class UsersModule { }
