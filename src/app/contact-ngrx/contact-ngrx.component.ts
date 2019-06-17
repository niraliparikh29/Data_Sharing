import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Selectors from './../store/user.selector';
@Component({
  selector: 'app-contact-ngrx',
  templateUrl: './contact-ngrx.component.html',
  styleUrls: ['./contact-ngrx.component.css']
})
export class ContactNgrxComponent implements OnInit {
  data:any;
  constructor(private store : Store<any>) { }

  ngOnInit() {
   this.getData()
  }
  getData()
  {
    this.store.select(Selectors.contactData).subscribe((response) => {
      console.log("In ts file",response)
      this.data = response
      
    })
  }
}
