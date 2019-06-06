import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  addUser:FormGroup
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm()
  {
    this.addUser = this.fb.group({    
      name :['',Validators.required],
      email :['',Validators.required],
      age :['',Validators.required],
      message :['',[Validators.required,Validators.maxLength(255)]]
    })
  }
}
