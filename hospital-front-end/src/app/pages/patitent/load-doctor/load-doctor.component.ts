import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-doctor',
  templateUrl: './load-doctor.component.html',
  styleUrls: ['./load-doctor.component.css']
})
export class LoadDoctorComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private doctorService:DoctorService,
    private snack:MatSnackBar

    ){}
  
    catId:any;
    doctors:any;
  

  ngOnInit(): void {

    // this.catId = this.route.snapshot.params['catId'];

    // console.log(this.catId);
    // if(this.catId == 0){
    //   console.log("load all the dept.")

    //   this.doctorService.getAllDoctors().subscribe(
    //     (data:any)=>{
    //       this.doctors = data;
    //       console.log(this.doctors);
    //     },
    //     (error) =>{
    //       console.log(error);
    //     }
    //   )
    // }else{
    //   console.log("Load specific data")
    // }

    this.route.params.subscribe((params)=>{
      this.catId = params['catId'];
      if(this.catId == 0){
        console.log("load all the dept.")
  
        this.doctorService.getAllDoctors().subscribe(
          (data:any)=>{
            this.doctors = data;
            console.log(this.doctors);
          },
          (error) =>{
            console.log(error);
            Swal.fire("Error in Lodading Data !",'Ok')
          }
        )
      }else{
        console.log("Load specific data")
        this.doctorService.getDoctorsOfCategory(this.catId).subscribe(
          (data)=>{
            this.doctors=data;
          },
          (error)=>{
            console.log(error);
            Swal.fire("Error in Lodading Data !",'Ok')
          }
        )
      }
    })
    
  }
}

