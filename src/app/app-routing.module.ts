import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddDoctorsFormComponent } from './add-doctors-form/add-doctors-form.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "addDoctor", component: AddDoctorsFormComponent},
  {path: "logIn", component: LogInComponent},
  {path: "signUp", component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
