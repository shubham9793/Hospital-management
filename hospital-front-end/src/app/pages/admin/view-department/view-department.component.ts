import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {
  categories:any=[]

  constructor(private _category:CategoryService) {}



  ngOnInit(): void { 

    this._category.categories().subscribe((data:any)=>{
      // success
      this.categories=data;
      console.log(this.categories);
    },
    (error) =>{
       console.log(error);
       Swal.fire("Error !!","Error in loading data","error"); 
      })
   }




}
