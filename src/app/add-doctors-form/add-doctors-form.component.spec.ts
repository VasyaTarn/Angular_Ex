import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorsFormComponent } from './add-doctors-form.component';

describe('AddDoctorsFormComponent', () => {
  let component: AddDoctorsFormComponent;
  let fixture: ComponentFixture<AddDoctorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDoctorsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDoctorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
