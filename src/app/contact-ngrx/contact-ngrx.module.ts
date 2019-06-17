import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactNgrxRoutingModule } from './contact-ngrx-routing.module';
import { ContactNgrxComponent } from './contact-ngrx.component';

@NgModule({
  declarations: [ContactNgrxComponent],
  imports: [
    CommonModule,
    ContactNgrxRoutingModule
  ]
})
export class ContactNgrxModule { }
