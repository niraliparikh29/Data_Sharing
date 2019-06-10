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
      email :['',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      age :['',[Validators.required,Validators.pattern('^[0-9]{2}$')]],
      message :['',[Validators.required,Validators.maxLength(255)]]
    })
  }
}
