import { Component, OnInit } from '@angular/core';
import { ApisService } from './../../apis.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private apis : ApisService) { }
  users:any;
  ngOnInit() {
    this.getUsers()
  }

  //Call third party api to display the data
  public getUsers() {
    this.apis.listUsers().subscribe((data:any) => {
    
      this.users = data
    })
  }
}
