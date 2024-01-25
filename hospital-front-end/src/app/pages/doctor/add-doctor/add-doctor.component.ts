import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { DoctorService } from 'src/app/services/doctor.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit  {

  horizontalPosition:  MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  

  categories:any=[];

  constructor(
    private categoryService:CategoryService,
    private snack:MatSnackBar,
    private doctorService:DoctorService
    ) {}
  
  doctorData={
    doctorFirstName:'',
    doctorLastName:'',
    specialist:'',
    description:'',
    fee:'',
    numberOfAppointment:'',
    category:{
      cid:''
    }
  };

  

  ngOnInit(): void { 

    this.categoryService.categories().subscribe(
      (data)=>{
        this.categories=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !","error in loading data","error");
      });
  }


public addDoctor() {
    if(this.doctorData.doctorFirstName=='' || this.doctorData.doctorFirstName==null) {
      this.snack.open("Doctor's First Name is required !","OKEY",{
        duration:3000,
        horizontalPosition:this.horizontalPosition,
        verticalPosition:this.verticalPosition,
    });
    return ;
  }

  if(this.doctorData.doctorLastName=='' || this.doctorData.doctorLastName==null) {
      this.snack.open("Doctor's Last Name is required !","OKEY",{
        duration:3000,
        horizontalPosition:this.horizontalPosition,
        verticalPosition:this.verticalPosition,
      });
      return ;
  }

  if(this.doctorData.specialist=='' || this.doctorData.specialist==null) {
    this.snack.open("specialist is required !","OKEY",{
      duration:3000,
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.verticalPosition,
    });
    return ;
  }

  if(this.doctorData.fee=='' || this.doctorData.fee==null) {
    this.snack.open("Doctor's Fee is required !","OKEY",{
      duration:3000,
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.verticalPosition,
    });
    return ;
  }
    
  if(this.doctorData.category.cid=='' || this.doctorData.fee==null) {
    this.snack.open("Choose Doctor's Departments !","OKEY",{
      duration:3000,
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.verticalPosition,
    });
    return ;
  }


  // calling data for the server
  this.doctorService.addDoctors(this.doctorData).subscribe(
    (data:any)=>{
      // On Successs
      Swal.fire('Success !',"Doctor Successfully Added",'success')
      this.doctorData={
        doctorFirstName:'',
        doctorLastName:'',
        specialist:'',
        description:'',
        fee:'',
        numberOfAppointment:'',
        category:{
          cid:''
        }
      };
    },
    (error) =>{
      //On Error
      console.log(error)
      Swal.fire("Error","Error While Adding Doctor",'error');
    }
  )

}


}

