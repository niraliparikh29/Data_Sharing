import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApisService } from './apis.service';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Subject2Component } from './subject2/subject2.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SubjectComponent } from './subject/subject.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { AppEffect } from './store/app.effects';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    Subject2Component,
    ReactiveFormComponent,        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({
      userData: userReducer
    }),
    EffectsModule.forRoot([AppEffect]),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient,ApisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
