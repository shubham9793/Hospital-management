import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-appointment',
  templateUrl: './show-appointment.component.html',
  styleUrls: ['./show-appointment.component.css'],
})
export class ShowAppointmentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private appointmentService: AppointmentService,
    private snack: MatSnackBar,
    public datepipe: DatePipe
  ) {}

  doctorId: any;
  user: any = [];
  userId: any;

  appointments: any = [];

  ngOnInit(): void {
    //this.doctorId = this.route.snapshot.params['doctorId']
    this.userId = this.route.snapshot.params['userId'];
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    this.userId = this.user.id;
    console.log(this.user);

    //  this.appointmentService.getAppointmentByUserId(this.doctorId).subscribe(
    this.appointmentService.getAppointmentByUserId(this.userId).subscribe(
      (data: any) => {
        console.log(data);
        console.log(this.userId);
        this.appointments = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public deleteAppointment(appointmentId: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        //delete function
        this.appointmentService.deleteAppointment(appointmentId).subscribe(
          (data) => {
            this.appointments = this.appointments.filter(
              (apId: any) => apId.appointmentId != appointmentId
            );

            Swal.fire('Success !', 'Doctor Successfully Deleted', 'success');
            //window.location.reload();
          },
          (error) => {
            Swal.fire('Error !', 'Error in finding Doctor id', 'error');
          }
        );
      }
    });
  }
}
