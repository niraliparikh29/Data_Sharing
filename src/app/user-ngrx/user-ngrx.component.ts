import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from './../store/user.actions';
import * as Selectors from './../store/user.selector';
import { IUser } from './../store/user.model';
// import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
// import { Action } from 'rxjs/internal/scheduler/Action';
// import { from } from 'rxjs';

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

  getAllData() {
    this.display = true
    this.store.dispatch(new Actions.load())
    this.store.select(Selectors.getAllUserData).subscribe((response) => {
      console.log("In ts file",response)
      this.data = response
    })
  }
}
