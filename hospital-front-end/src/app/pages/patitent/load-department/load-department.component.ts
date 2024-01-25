import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-load-department',
  templateUrl: './load-department.component.html',
  styleUrls: ['./load-department.component.css']
})
export class LoadDepartmentComponent implements OnInit {

  constructor(
    private categoryService:CategoryService,
    private snack:MatSnackBar
  ){}

  categories:any;

  ngOnInit(): void { 

    this.categoryService.categories().subscribe(
      (data)=>{
        this.categories=data;
      },
      (error)=>{
        this.snack.open("Error in loading data from Server",'',{
          duration:3000
        })
      }
    )

   }

}
