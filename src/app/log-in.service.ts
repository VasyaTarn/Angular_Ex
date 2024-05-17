import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  formFields : any[] = [
    {
      fieldName: "Email",
      type: "email",
      formName: "email",
    },
    {
      fieldName: "Password",
      type: "password",
      formName: "password",
    }
  ]
}
