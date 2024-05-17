import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../sign-up.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  form! : FormGroup;

  signUpForm : any = [];

  isDuplicate : boolean = false;

  constructor(private signUpFormServ: SignUpService, private userSrvice: UsersService, private router:Router)
  {
    this.signUpForm = signUpFormServ.formFields;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      logInData: new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/)])
      })
    });
  };


  onSubmit()
  {
    const temp : any = [];
    temp.push(this.form.value);


    this.userSrvice.getUsers().forEach((element: any) => {
      if(temp[0].logInData.email == element.logInData.email)
        {
          this.isDuplicate = true;
        }
    });

    if(!this.isDuplicate && temp[0].logInData.password == temp[0].logInData.confirmPassword)
    {
      this.userSrvice.addUser(this.form.value);
      alert("You have successfully registered");
      this.router.navigate(['/logIn']);
    }
    else if(this.isDuplicate)
    {
      alert("The user with this email is already registered");
      this.isDuplicate = false;
    }
    else if(temp[0].logInData.password != temp[0].logInData.confirmPassword)
    {
      alert("Password not confirmed");
    }


  }
}
