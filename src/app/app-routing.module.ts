import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
