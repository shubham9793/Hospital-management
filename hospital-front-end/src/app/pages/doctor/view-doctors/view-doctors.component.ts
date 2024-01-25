import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent implements OnInit {
  
  doctors:any=[];
  
  

  constructor(private doctorService:DoctorService){}

  ngOnInit(): void { 
    this.doctorService.getAllDoctors().subscribe(
      (data)=>{
        this.doctors=data;
      },
      (error) =>{
        console.log(error);
        Swal.fire("Error !","Error in loading data !","error");
      })
   }


   public deleteDoctorData(doctorid:any) {
    Swal.fire({
      icon:'info',
      title:'Are you sure?',
      confirmButtonText:'Delete',
      showCancelButton:true,

    }).then((result)=>{
      if(result.isConfirmed) {
        //delete function
        this.doctorService.deleteDoctor(doctorid).subscribe(
          (data)=>{
            this.doctors = this.doctors.filter((doctId:any)=>doctId.doctorid!=doctorid)
            
            Swal.fire("Success !","Doctor Successfully Deleted",'success');
            //window.location.reload();
          },
          (error) =>{
            Swal.fire("Error !","Error in finding Doctor id",'error')
          });
      }
    })
  }



}
