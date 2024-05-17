import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorFormService {

  formFields : any[] = [
    {
      fieldName: "First name",
      type: "text",
      formName: "firstName",
    },
    {
      fieldName: "Last name",
      type: "text",
      formName: "lastName",
    },
    {
      fieldName: "Middle name",
      type: "text",
      formName: "middleName",
    },
    {
      fieldName: "Phone number",
      type: "text",
      formName: "phoneNumber",
    },
    {
      fieldName: "Specialization",
      type: "text",
      formName: "specialization",
    },
  ]
}
