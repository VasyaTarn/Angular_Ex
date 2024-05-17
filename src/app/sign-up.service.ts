import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  formFields : any[] = [
    {
      fieldName: "Name",
      type: "text",
      formName: "name",
    },
    {
      fieldName: "Email",
      type: "email",
      formName: "email",
    },
    {
      fieldName: "Password",
      type: "password",
      formName: "password",
    },
    {
      fieldName: "Confirm password",
      type: "password",
      formName: "confirmPassword",
    },
  ]
}
