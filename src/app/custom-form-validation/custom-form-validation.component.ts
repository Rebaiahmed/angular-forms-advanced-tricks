import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';



function ageValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const age = control.value as number;

    if (isNaN(age) || age < minAge) {
      return { 'invalidAge': true };
    }

    return null;
  };
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
      age: new FormControl('', [Validators.required,ageValidator(18)])
    });  

   
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
