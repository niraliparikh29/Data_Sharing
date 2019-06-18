import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Selectors from './../store/app.selectors';
import * as UserAction from './../store/app.actions';
import { IUser } from './../store/app.state';

@Component({
  selector: 'app-user-ngrx',
  templateUrl: './user-ngrx.component.html',
  styleUrls: ['./user-ngrx.component.css']
})
export class UserNgrxComponent implements OnInit {
  display : boolean = false
  data: IUser[];
  constructor(private store : Store<any>) { }

  ngOnInit() {
  }

  getUserData()
  {
    this.display = true;
    this.store.dispatch(new UserAction.load())
    this.store.select(Selectors.getAllUserData).subscribe((response) => {
      this.data = response
    })
  }
 
}
