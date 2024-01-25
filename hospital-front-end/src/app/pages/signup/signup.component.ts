import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private userService: UserService, private snack: MatSnackBar) {}

  public user = {
    Id: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {}

  formSubmit() {
    // Encryption

    console.log(this.user);

    if (this.user.username == '' || this.user.username == null) {
      this.snack.open('Username is required !', 'Ok', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }
    if (this.user.password == '' || this.user.password == null) {
      this.snack.open('Password can not be null !', 'Ok', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }

    if (this.user.password.length < 8) {
      //alert("password must be 8 characters long");
      this.snack.open('password must be 8 characters long !', 'Ok', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }

    // this.user.password = ConversionUtils.stringToBase64(this.user.password);
    this.user.password = this.user.password;

    console.log(this.user);
    // Add userService
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        // onSucess

        //alert("Successfully added");
        Swal.fire('Successfully done', 'User id is ' + data.id, 'success');
      },
      (error) => {
        console.log(error);
        //alert("Somthing went wrong");
        this.snack.open('Somthing went wrong !', 'Ok', {
          duration: 3000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    );
  }
}
