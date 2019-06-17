import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactNgrxComponent } from './contact-ngrx.component';

const routes: Routes = [
  {
    path:'',
    component:ContactNgrxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactNgrxRoutingModule { }
