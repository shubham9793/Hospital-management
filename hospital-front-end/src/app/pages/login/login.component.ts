import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public loginData = {
    username: '',
    password: '',
  };

  constructor(
    private snack: MatSnackBar,
    private login: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    console.log('form submited');

    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snack.open('Username Is Required! ', 'OKEY', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('Password Is Required! ', 'OKEY', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }

    if (this.loginData.password.length < 8) {
      this.snack.open('password must be 8 characters long !', 'Ok', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }

    // Encrypted password

    //this.loginData.password = ConversionUtils.stringToBase64(this.loginData.password);
    //console.log(this.loginData.password );

    // request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log(data);

        //login...
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe((user: any) => {
          this.login.setUser(user);
          console.log(this.login.getUserRole());
          console.log('User details retrieved:', user);
          // console.log(user);
          //redirect .... ADMIN || admin-dashboard
          //redirect .....Normal || normal-dashboard
          //admin Dashboard
          if (this.login.getUserRole() == 'Admin') {
            console.log('Navigating to admin...');
            this.router.navigate(['admin']);
            console.log('Navigation completed.');
            this.login.loginStatusSubject.next(true);

            // doctor user dashboard
          } else if (this.login.getUserRole() == 'Doctor') {
            this.router.navigate(['doctor']);
            this.login.loginStatusSubject.next(true);

            //Receptionist dashboard
          } else if (this.login.getUserRole() == 'Receptionist') {
            this.router.navigate(['receptionist']);
            this.login.loginStatusSubject.next(true);

            //patient dashboard
          } else if (this.login.getUserRole() == 'Patient') {
            this.router.navigate(['patient']);
            this.login.loginStatusSubject.next(true);
          } else {
            this.login.logout();
            location.reload();
          }
        });
      },
      (error) => {
        console.log('error !');
        console.log(Buffer.from(this.loginData.password).toString('base64'));
        console.log(error);
        this.snack.open('Invailid Details! ', 'Try again', {
          duration: 3000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    );
  }
}

// import { Component, OnInit } from '@angular/core';
// import {
//   MatSnackBar,
//   MatSnackBarHorizontalPosition,
//   MatSnackBarVerticalPosition,
// } from '@angular/material/snack-bar';
// import { Router } from '@angular/router';
// import { LoginService } from 'src/app/services/login.service';
// //import * as bcrypt from "bcrypt";

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent implements OnInit {
//   horizontalPosition: MatSnackBarHorizontalPosition = 'right';
//   verticalPosition: MatSnackBarVerticalPosition = 'top';

//   public loginData = {
//     username: '',
//     password: '',
//   };
//   constructor(
//     private snack: MatSnackBar,
//     private login: LoginService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {}

//   formSubmit() {
//     console.log('form submited');

//     if (
//       this.loginData.username.trim() == '' ||
//       this.loginData.username == null
//     ) {
//       this.snack.open('Username Is Required! ', 'OKEY', {
//         duration: 3000,
//         horizontalPosition: this.horizontalPosition,
//         verticalPosition: this.verticalPosition,
//       });
//       return;
//     }

//     if (
//       this.loginData.password.trim() == '' ||
//       this.loginData.password == null
//     ) {
//       this.snack.open('Password Is Required! ', 'OKEY', {
//         duration: 3000,
//         horizontalPosition: this.horizontalPosition,
//         verticalPosition: this.verticalPosition,
//       });
//       return;
//     }

//     // request to server to generate token
//     this.login.generateToken(this.loginData).subscribe(
//       (data: any) => {
//         console.log('success');
//         //console.log(data)

//         //login...
//         this.login.loginUser(data.token);

//         this.login.getCurrentUser().subscribe((user: any) => {
//           this.login.setUser(user);
//           // console.log(user);
//           //redirect .... ADMIN || admin-dashboard
//           //redirect .....Normal || normal-dashboard
//           //admin Dashboard
//           if (this.login.getUserRole() == 'ADMIN') {
//             this.router.navigate(['admin']);
//             this.login.loginStatusSubject.next(true);

//             // doctor user dashboard
//           } else if (this.login.getUserRole() == 'DOCTOR') {
//             this.router.navigate(['doctor']);
//             this.login.loginStatusSubject.next(true);

//             //Receptionist dashboard
//           } else if (this.login.getUserRole() == 'RECEPTIONIST') {
//             this.router.navigate(['receptionist']);
//             this.login.loginStatusSubject.next(true);

//             //patient dashboard
//           } else if (this.login.getUserRole() == 'PATIENT') {
//             this.router.navigate(['patient']);
//             this.login.loginStatusSubject.next(true);
//           } else {
//             this.login.logout();
//             location.reload();
//           }
//         });
//       },
//       (error) => {
//         console.log('error !');
//         console.log(Buffer.from(this.loginData.password).toString('base64'));
//         console.log(error);
//         this.snack.open('Invailid Details! ', 'Try again', {
//           duration: 3000,
//           horizontalPosition: this.horizontalPosition,
//           verticalPosition: this.verticalPosition,
//         });
//       }
//     );
//   }
// }
