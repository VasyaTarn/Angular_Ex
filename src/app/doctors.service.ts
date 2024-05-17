import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private doctors: any[] = [];

  constructor() { }

  addDoctor(doctor: any) {
    this.doctors.push(doctor);
  }

  getDoctors(): Observable<any[]> {
    return of(this.doctors); 
  }
}
