import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as Actions from './../../store/user.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  addUser:FormGroup
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  
  buildForm()
  {
    this.addUser = this.fb.group({    
      name :['',Validators.required],
      email :['',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      age :['',[Validators.required,Validators.pattern('^[0-9]{2}$')]],
      message :['',[Validators.required,Validators.maxLength(255)]]
    })
  }

  saveData()
  {
      console.log("adduser",this.addUser.value);
      this.store.dispatch(new Actions.save(this.addUser.value));
     this.router.navigateByUrl('/contactngrx');
  }
}
