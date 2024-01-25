import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-show-doctors-appointment',
  templateUrl: './show-doctors-appointment.component.html',
  styleUrls: ['./show-doctors-appointment.component.css']
})
export class ShowDoctorsAppointmentComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private doctorService:DoctorService,
    private appointmentService:AppointmentService,
    private snack:MatSnackBar

    ){}
  
    doctorId:any;
    user:any=[]
    userId:any;
    
    appointments:any=[]
  

  ngOnInit(): void {

    this.doctorId = this.route.snapshot.params['doctorId']
    // this.user=sessionStorage.getItem('user');
    //   this.user = JSON.parse(this.user);
    //  this.userId=this.user.id;
    this.appointmentService.getAppointmentofDoctors(this.doctorId).subscribe(
      (data:any)=>{
        console.log(data);
        this.appointments=data;
      },
      (error) =>{
        console.log(error);
      }
    )
  }




  
 public deleteAppointment(doctorId:any){

 }

}
