import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApisService {
 
  constructor(private httpClient: HttpClient) { }

  public listUsers() {
    return this.httpClient.get(`http://dummy.restapiexample.com/api/v1/employees`);
  }
  //Using behaviour subject
  private messageSource = new BehaviorSubject('')
  currentMessage = this.messageSource.asObservable();
  
  changeMessage(message:string) {
    console.log("Before",message)
    this.messageSource.next(message)
    console.log("After",message)
  }
 
  changeMessage2(message:string) {
    console.log("Before  2",message)
    this.messageSource.next(message)
    console.log("after  2",message)
  }

}
