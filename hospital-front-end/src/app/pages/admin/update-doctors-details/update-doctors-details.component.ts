import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { DoctorService } from 'src/app/services/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-doctors-details',
  templateUrl: './update-doctors-details.component.html',
  styleUrls: ['./update-doctors-details.component.css']
})
export class UpdateDoctorsDetailsComponent implements OnInit {

  constructor(
    private doctorService:DoctorService,
    private categoryService:CategoryService,
    private router:Router,
    private route:ActivatedRoute,
  ){}

  doctorId = 0;
  doctor:any;
  categories:any;

  ngOnInit(): void {

    this.doctorId = this.route.snapshot.params['doctorId'];
    console.log(this.doctorId);
    this.doctorService.getDoctor(this.doctorId).subscribe(
      (data)=>{
        // OnSuccess
        console.log(this.doctor);
        this.doctor = data;
      },
      (error)=>{
        //OnError
        console.log("Error occurs");
        console.log(error);

      });


      // Loading categories
      this.categoryService.categories().subscribe(
        (data)=>{
          // OnSuccess
          this.categories=data;
        },
        (error)=>{
          console.log("Error on lodaing Departments !")
          console.log(error);
          Swal.fire('Error !',"Error on Loading Departments !",'error')
        }
      )
  }

  // update form and submit()
  public updateDoctor() {
    this.doctorService.updateDoctor(this.doctor).subscribe(
      (data)=>{
        Swal.fire('Success !',"Doctor Details Updated",'success').then((e)=>{
          this.router.navigate(['/admin/doctors']);
        });
      },
      (error) =>{
        Swal.fire('Error !','Error in updateing doctor Details','error');
      });
  }

}
