import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponentComponent } from './dynamic-form-component/dynamic-form-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormValidationComponent } from './custom-form-validation/custom-form-validation.component';
import { NestedFormsComponent } from './nested-forms/nested-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponentComponent,
    CustomFormValidationComponent,
    NestedFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
