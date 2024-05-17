import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorFormService } from '../doctor-form.service';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-add-doctors-form',
  templateUrl: './add-doctors-form.component.html',
  styleUrl: './add-doctors-form.component.css'
})
export class AddDoctorsFormComponent {
  form! : FormGroup

  doctorForm: any = [];

  isDuplicate : boolean = false;

  idValue : number = 0;

  doctors: any[] = [];

  constructor(private doctorFormService: DoctorFormService, private doctorsService:DoctorsService)
  {
    this.doctorForm = doctorFormService.formFields;
  }

  ngOnInit() : void
  {
    this.form = new FormGroup({
      doctorData : new FormGroup({
        firstName : new FormControl("", [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]*$/)]),
        lastName : new FormControl("", [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]*$/)]),
        middleName : new FormControl("", [Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]*$/)]),
        phoneNumber : new FormControl("+380", [Validators.required, Validators.maxLength(13), Validators.pattern(/^\+380\d{9}$/)]),
        specialization : new FormControl("", [Validators.required, Validators.maxLength(40), Validators.pattern(/^[a-zA-Z0-9]*$/)])
      })
    })

    this.doctorsService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
    });
  }

  onSubmit()
  {
    const temp : any = [];
    temp.push(this.form.value);

    this.doctors.forEach((element: any) => {
      if(temp[0].doctorData == element.doctorData)
        {
          this.isDuplicate = true;
        }
    });

    if(this.form && this.form.value && !this.isDuplicate)
    {
      let currentDate = new Date();
      currentDate.setHours(currentDate.getHours() + 2);

      const editDoctor = {
        ...this.form.value,
        id: this.idValue,
        clientName: "",
        clientEmail: "",
        isClientEmpty: true,
        appointmentDate: currentDate.toLocaleString(),
      }
      this.doctorsService.addDoctor(editDoctor);
      this.idValue++;
    }
    else
    {
      alert("This doctor is already on the list");
      this.isDuplicate = false;
    }
    
    
  }

  deleteDoctor(index: number)
  {
    this.doctors.splice(index, 1);
  }

}
