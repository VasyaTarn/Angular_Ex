import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { userInfo } from 'os';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  userName: string = "";
  logInStatus: boolean = false;

  constructor(private users: UsersService, private router: Router) {}

  ngOnInit() {
    this.updateUserInfo();
  }

  updateUserInfo() {
    this.users.getUserName().subscribe((name: string) => {
      this.userName = name;
    });
    this.users.getLogInStatus().subscribe((status: boolean) => {
      this.logInStatus = status;
    });
  }

  logout()
  {
    this.users.setEmptyCurrentUser();
    this.users.setLogInStatus(false);
    this.router.navigate([""]);
  }
}
