import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-component',
  templateUrl: './dynamic-form-component.component.html',
  styleUrls: ['./dynamic-form-component.component.css']
})
export class DynamicFormComponentComponent {
  form: FormGroup;
  fields = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name'
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name'
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
    this.fields.forEach(field => {
      this.form.addControl(field.name, this.fb.control(''));
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
