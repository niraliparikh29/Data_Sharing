import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { Subject2Component } from './subject2/subject2.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DataPassingComponent } from './data-passing/data-passing.component';


const routes: Routes = [
  { 
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'company',
    loadChildren: './company/company.module#CompanyModule'
  },
  {
    path: 'home',
    loadChildren : './home/home.module#HomeModule'
  },
  {
    path:'user',
    loadChildren :'./users/users.module#UsersModule'
  },
  {
    path:'contact',
    loadChildren:'./contact/contact.module#ContactModule'
  },
  {
    path:'subject',
    component:SubjectComponent
  },
  {
    path:'subject2',
    component:Subject2Component
  },
  {
    path:'form',
    component:ReactiveFormComponent
  },
  {
    path:'dataPass',
    component:DataPassingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
