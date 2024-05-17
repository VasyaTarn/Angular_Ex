import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogInService } from '../log-in.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  form! : FormGroup;

  logInForm : any = [];

  constructor(private logInFormServ: LogInService, private userService: UsersService, private router:Router)
  {
    this.logInForm = logInFormServ.formFields;
  }

  ngOnInit() : void
  {
    this.form = new FormGroup({
      logInData : new FormGroup({
        email : new FormControl("", [Validators.required, Validators.email]),
        password : new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]),
      })
    })
  }

  onSubmit() {
    const temp: any = [];
    temp.push(this.form.value);
  
    const users = this.userService.getUsers();
    for (const element of users) {
      if ((temp[0].logInData.email == element.logInData.email) && (temp[0].logInData.password == element.logInData.password)) {
        this.userService.addCurrentUser(element);
        alert("You have successfully logged in to your account");
        this.router.navigate(['']);
        this.userService.setLogInStatus(true);
        this.userService.setUserName(element.logInData.name);
        return; 
      }
    }

    alert("Invalid email or password");
  }

}
