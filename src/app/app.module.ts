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
import { DataPassingComponent } from './data-passing/data-passing.component';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    Subject2Component,
    ReactiveFormComponent,
    DataPassingComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient,ApisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
