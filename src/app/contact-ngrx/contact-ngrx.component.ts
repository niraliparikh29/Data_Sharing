import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Selectors from './../store/user.selector';
import { ContactState } from '../store/user.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact-ngrx',
  templateUrl: './contact-ngrx.component.html',
  styleUrls: ['./contact-ngrx.component.css']
})
export class ContactNgrxComponent implements OnInit {
  data:any;
  isData:boolean = false
  constructor(private store : Store<ContactState>, private toastr: ToastrService) { }

  ngOnInit() {
   this.getData()
  }
  getData()
  {
    this.store.select(Selectors.contactData).subscribe((response) => {
      if(response) {
        this.isData = true
        console.log("In ts file",response)
        this.data = response
      }
      else
      {
        setTimeout(() => {
          this.toastr.error('Something went wrong');
        });
      }
    })
  }
}
