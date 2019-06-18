import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private httpClient: HttpClient) { }

  public listUsers(): Observable<any> {
    return this.httpClient.get(`http://dummy.restapiexample.com/api/v1/employees`);
  }
  //Using behaviour subject
  private messageSource = new BehaviorSubject('')
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  changeMessage2(message: string) {
    this.messageSource.next(message)
  }

}
