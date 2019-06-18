import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
@Component({
  selector: 'app-contact-ngrx',
  templateUrl: './contact-ngrx.component.html',
  styleUrls: ['./contact-ngrx.component.css']
})
export class ContactNgrxComponent implements OnInit {
  data: any;
  isData: boolean = false
  constructor(
    private store: Store<AppState>,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getDetails()
  }
  getDetails() {
    this.store.select(state => state.userData).subscribe(res => {
      if (res) {
        this.isData = true
        this.data = res['userData'];
      }
      else {
        setTimeout(() => {
          this.toastr.error("Something wrong")
        });
      }
    })
  }
}
