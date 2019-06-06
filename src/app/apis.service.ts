import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private httpClient: HttpClient) { }

  public listUsers(){
    return this.httpClient.get(`http://dummy.restapiexample.com/api/v1/employees`);
  }

}
