import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  //name = new FormControl('');
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['',Validators.required,{updateOn:'blur'}],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
  });
  }

  // public changeMode()
  // {
  //   console.log("Calling")
  //   const value = this.registerForm.get('firstName').value;
  //   const newControl = new FormControl( 
  //     value, {
  //       updateOn:'submit',validators:[Validators.required] }
      
  //   );
  //   this.registerForm.setControl('name',newControl);
  //   console.log("Value",value)
  // }
  get f() { return this.registerForm.controls; }
  // updateName() {
  //   this.name.setValue('Nirali');
  // }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    console.log("Value",this.registerForm.value)
   
}

}
// this.forecastForm = new FormGroup({
//   dateFormatted: new FormControl(this.forecast.dateFormatted, { validators: Validators.required, asyncValidators: [this.forecastValidators.existingDateValidator(this.forecast.dateFormatted)], updateOn: 'blur' }),
//   temperatureC: new FormControl(this.forecast.temperatureC, [Validators.required]),
//   temperatureF: new FormControl(this.forecast.temperatureF),
//   summary: new FormControl(this.forecast.summary)
// });