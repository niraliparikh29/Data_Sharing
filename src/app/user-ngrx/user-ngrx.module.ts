import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserNgrxRoutingModule } from './user-ngrx-routing.module';
import { UserNgrxComponent } from './user-ngrx.component';

@NgModule({
  declarations: [UserNgrxComponent],
  imports: [
    CommonModule,
    UserNgrxRoutingModule
  ]
})

export class UserNgrxModule { }
