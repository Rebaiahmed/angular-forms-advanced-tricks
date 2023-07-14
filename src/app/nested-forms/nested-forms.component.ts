import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-forms',
  templateUrl: './nested-forms.component.html',
  styleUrls: ['./nested-forms.component.css']
})
export class NestedFormsComponent {

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        zipcode: new FormControl('', [Validators.required])
      })
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

}
