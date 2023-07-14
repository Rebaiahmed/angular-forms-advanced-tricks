import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormsComponent } from './nested-forms.component';

describe('NestedFormsComponent', () => {
  let component: NestedFormsComponent;
  let fixture: ComponentFixture<NestedFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
