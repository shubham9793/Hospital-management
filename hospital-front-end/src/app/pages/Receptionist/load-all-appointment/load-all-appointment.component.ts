import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-all-appointment',
  templateUrl: './load-all-appointment.component.html',
  styleUrls: ['./load-all-appointment.component.css'],
})
export class LoadAllAppointmentComponent implements OnInit {
  constructor(
    private appointmentService: AppointmentService,
    private route: ActivatedRoute
  ) {}

  appointments: any = [];
  doctorId: any;
  user: any = [];
  userId: any;

  ngOnInit(): void {
    this.getAllAppointments();
  }

  public getAllAppointments = () => {
    this.appointmentService.getAllAppointments().subscribe(
      (data: any) => {
        this.appointments = data;
      },
      (error) => {
        console.log(error);
      }
    );
  };

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
