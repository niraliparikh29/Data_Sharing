import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserNgrxComponent } from './user-ngrx.component';

const routes: Routes = [
  {
    path:'',
    component:UserNgrxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserNgrxRoutingModule { }
