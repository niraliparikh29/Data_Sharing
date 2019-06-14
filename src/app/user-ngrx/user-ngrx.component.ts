import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-user-ngrx',
  templateUrl: './user-ngrx.component.html',
  styleUrls: ['./user-ngrx.component.css']
})
export class UserNgrxComponent implements OnInit {
  display : boolean = false
  constructor(private store : Store<any>) { }

  ngOnInit() {
  }

  getAllData() {
    this.display = true
    
  }
}
