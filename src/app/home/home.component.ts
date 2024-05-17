import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  logInStatus : boolean = false;


  constructor(private router: Router, private users: UsersService, private doctorsService: DoctorsService) {}

  ngOnInit() {
    this.users.getLogInStatus().subscribe((status: boolean) => {
      this.logInStatus = status;
    });
  }

  addDoctor()
  {
    if(this.logInStatus)
    {
      this.router.navigate(["/addDoctor"]);
    }
    else
    {
      this.router.navigate(["/signUp"]);
      alert("To add doctors you need to register");
    }
  }
}
