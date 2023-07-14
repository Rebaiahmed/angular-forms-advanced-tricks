import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

function ageValidator(control: FormControl) {
  const age = control.value;
  if (age && (isNaN(age) || age < 18 || age > 120)) {
    return { invalidAge: true };
  }
  return null;
}

@Component({
  selector: 'app-custom-form-validation',
  templateUrl: './custom-form-validation.component.html',
  styleUrls: ['./custom-form-validation.component.css']
})
export class CustomFormValidationComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      age: new FormControl('', [Validators.required, ageValidator])
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
