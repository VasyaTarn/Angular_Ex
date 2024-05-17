import { Component, Input } from '@angular/core';
import { DoctorsService } from '../doctors.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.css'
})
export class DoctorsListComponent {
  @Input() doctors : any; 
  @Input() index: any;
  editStatus : boolean = false;
  editDateStatus : boolean = false;
  indexClientDuplicate : number | null = null;

  constructor(private doctorsService: DoctorsService, private usersService: UsersService){}

  edit()
  {
    this.editStatus = true;
  }

  saveUser()
  {
    this.editStatus = false;
  }

  makeApp()
  { 

    console.log(this.doctors)
    for (const element of this.doctors) 
    {
      if(element.clientName === this.usersService.getCurrentUser().logInData.name && element.clientEmail === this.usersService.getCurrentUser().logInData.email)
        {
          this.indexClientDuplicate = this.doctors.indexOf(element);
        }
    }

    if(this.indexClientDuplicate || this.indexClientDuplicate == 0)
    {
      let currentDate: Date = new Date();
      currentDate.setHours(currentDate.getHours() + 2);

      this.doctors[this.indexClientDuplicate].clientName = "";
      this.doctors[this.indexClientDuplicate].clientEmail = "";
      this.doctors[this.indexClientDuplicate].appointmentDate = currentDate.toLocaleString();
      this.doctors[this.indexClientDuplicate].isClientEmpty = true;

      this.doctors[this.index].clientName = this.usersService.getCurrentUser().logInData.name;
      this.doctors[this.index].clientEmail = this.usersService.getCurrentUser().logInData.email;
      this.doctors[this.index].isClientEmpty = false;
    }
    else
    {
      this.doctors[this.index].clientName = this.usersService.getCurrentUser().logInData.name;
      this.doctors[this.index].clientEmail = this.usersService.getCurrentUser().logInData.email;
      this.doctors[this.index].isClientEmpty = false;
    }

    this.indexClientDuplicate = null;
  }

  editDate()
  {
    this.editDateStatus = true;
  }

  saveDate()
  {
    this.editDateStatus = false;
  }

  cancelApp()
  {
    let currentDate: Date = new Date();
    currentDate.setHours(currentDate.getHours() + 2);

    this.doctors[this.index].clientName = "";
    this.doctors[this.index].clientEmail = "";
    this.doctors[this.index].appointmentDate = currentDate.toLocaleString();
    this.doctors[this.index].isClientEmpty = true;
  }
}
