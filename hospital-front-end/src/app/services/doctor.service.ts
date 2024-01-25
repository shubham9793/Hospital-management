import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './Helper';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }


  // Get All Doctors
  public getAllDoctors() {
    return this.http.get(`${baseUrl}/doctor/`);
  }

  // Add new Doctors
  public addDoctors(doctor:any) {
    return this.http.post(`${baseUrl}/doctor/`,doctor);
  }

  // Delete Doctor => did= Doctors Id
  public deleteDoctor(did:any) {
    return this.http.delete(`${baseUrl}/doctor/${did}`);
  }


  // Get the single doctor
  public getDoctor(did:any) {
    return this.http.get(`${baseUrl}/doctor/${did}`);
  }

  // Update Doctor
  public updateDoctor(doctor:any) {
    return this.http.put(`${baseUrl}/doctor/`,doctor);
  }


  // Get Doctors of a particular category/department
  public getDoctorsOfCategory(cid:any) {
    return this.http.get(`${baseUrl}/doctor/category/${cid}`);
  }
}
