import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './Helper';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  user: any = [];

  constructor(private http: HttpClient) {}

  // Get All Appointments
  public getAllAppointments() {
    return this.http.get(`${baseUrl}/appointment/book-appointment`);
  }

  // Get Single Appointment
  public getSingleAppointment(appointmentId: any) {
    return this.http.get(`${baseUrl}/appointment/${appointmentId}`);
  }

  // Add Appointments
  public addAppointment(appointment: any) {
    console.log('this is new appo : ' + appointment);
    return this.http.post(
      `${baseUrl}/appointment/book-appointment`,
      appointment
    );
  }

  // delete appointment
  public deleteAppointment(appointmentId: any) {
    return this.http.delete(`${baseUrl}/appointment/${appointmentId}`);
  }

  // Update Appointment
  public updateAppontment(appointment: any) {
    return this.http.put(`${baseUrl}/appointment/`, appointment);
  }

  // Get Appointment of doctor

  public getAppointmentofDoctors(doctorid: any) {
    return this.http.get(`${baseUrl}/appointment/doctor/${doctorid}`);
  }

  // Get Appointment by UserId
  public getAppointmentByUserId(userId: any) {
    console.log(userId);
    return this.http.get(`${baseUrl}/appointment/apt/${userId}`);
  }
}
