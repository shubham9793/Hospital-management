import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css'],
})
export class BookAppointmentComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  user: any;
  // start => StartDate
  // end => EndDate
  start: any;
  end: any;

  doctorId: any;

  appointment: any = {
    doctor: {},
    firstname: '',
    lastname: '',
    patientProblem: '',
    startDate: '',
    appTime: '',
    userId: '',
  };

  appointments: any = [];

  currDate: any = '';

  constructor(
    private loginService: LoginService,
    private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private _snack: MatSnackBar,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['doctorId'];
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);

    //set the userId to the appoinment
    this.appointment.userId = this.user.id;

    // //set the doctorId to the appoinment
    this.appointment.doctor['doctorId'] = this.doctorId;
  }

  // Get current date on OnClick
  public oncheckExistingDate(currentDate: string) {
    var existApp: number = 0;
    this.currDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    console.log(' current date  => ' + this.currDate);
    console.log('Type of current date  => ' + typeof this.currDate);
    this.appointmentService.getAppointmentofDoctors(this.doctorId).subscribe(
      (data: any) => {
        data.map((item: any) => {
          if (currentDate == item.startDate) {
            existApp = 1;
          }
          console.log(
            'type of existing date ' + item.startDate + typeof item.startDate
          );
        });
        //console.log('updated'+existApp);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Get current time and Check the existing Date&Time on OnClick
  public oncheckExistingTime(currentTime: any) {
    var existApp: number = 0;
    this.appointmentService.getAppointmentofDoctors(this.doctorId).subscribe(
      (data: any) => {
        data.map((item: any) => {
          item.startDate = this.datePipe.transform(
            item.startDate,
            'yyyy-MM-dd'
          );
          if (
            currentTime === item.appTime &&
            this.currDate === item.startDate
          ) {
            existApp = 1;
          }
        });

        if (existApp === 1) {
          alert('Appointment Already Exist on this Date&Time,Choose Another!');
          window.location.reload();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Calling Server
  public bookAppointment() {
    this.appointment.appTime = this.datePipe.transform(
      this.appointment.startDate,
      'yyyy-MM-dd'
    );
    console.log(this.appointment.startDate);
    console.log(this.appointment.startDate);
    console.log(typeof this.appointment.appTime);
    // return false;

    if (
      this.appointment.firstname == '' ||
      this.appointment.firstname == null
    ) {
      this._snack.open("First Name can't be empty !", 'OKEY', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }

    if (this.appointment.lastname == '' || this.appointment.lastname == null) {
      this._snack.open("Last Name can't be empty !", 'OKEY', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }

    if (
      this.appointment.patientProblem == '' ||
      this.appointment.patientProblem == null
    ) {
      this._snack.open('Problem Description required !', 'OKEY', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }

    if (this.appointment.appTime == '' || this.appointment.appTime == null) {
      this._snack.open('Appointment Time  required !', 'OKEY', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }

    if (
      this.appointment.startDate == '' ||
      this.appointment.startDate == null
    ) {
      this._snack.open('Date  required !', 'OKEY', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }

    this.appointment.userId = this.user.id;
    this.appointmentService.addAppointment(this.appointment).subscribe(
      (data: any) => {
        Swal.fire('Success !', 'Appointment Booked !', 'success');
        this.appointment = {
          firstname: '', //this.user.firstname,
          lastname: '', //this.user.lastname,
          patientProblem: '',
          phone: '', //this.user.phone,
          startDate: '',
          appTime: '',
          userId: '',
        };
        console.log(data);
      },
      (error) => {
        console.log('error');
        console.log(error);
        Swal.fire('Error', 'Error While booking appointment', 'error');
      }
    );
  }
}
