import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-patient-sidebar',
  templateUrl: './patient-sidebar.component.html',
  styleUrls: ['./patient-sidebar.component.css'],
})
export class PatientSidebarComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private snack: MatSnackBar,
    private login: LoginService
  ) {}

  categories: any;

  ngOnInit(): void {
    this.categoryService.categories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
        this.snack.open('Error in loading data from Server', '', {
          duration: 3000,
        });
      }
    );
  }

  public logout() {
    this.login.logout();
    window.location.reload();
  }
}
