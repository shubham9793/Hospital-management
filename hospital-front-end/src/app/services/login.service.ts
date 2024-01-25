// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// import baseUrl from './Helper';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   public loginStatusSubject = new Subject<boolean>();

//   constructor(private http:HttpClient) { }

//   // get current user details which is currently login
//   public getCurrentUser() {
//     return this.http.get(`${baseUrl}/current-user`);
//   }

//   //generate token
//   public generateToken(loginData:any) {
//     return this.http.post(`${baseUrl}/generate-token`,loginData)
//   }

//   //loginUser : set token user in sessionStorage
//   public loginUser(token:any) {
//     sessionStorage.setItem("token",token);

//     return true;
//   }

//   //IsLogin : user is logged in or not
//   public isLoggedin() {
//     let tokenstr=sessionStorage.getItem('token')
//     if(tokenstr==undefined || tokenstr==''|| tokenstr==null) {
//       return false;
//     }else {
//       return true;
//     }
//   }

//   // logout : remove token form local storage

//   public logout() {
//     sessionStorage.removeItem('token');
//     sessionStorage.removeItem('user');
//     return true;
//   }

//   // getToen : return the token and store the userDetails

//   public getToken() {
//     return sessionStorage.getItem('token');
//   }

//   // setUserDetails : set user details
//   public setUser(user:any) {
//     sessionStorage.setItem('user',JSON.stringify(user));

//   }

//   //GetUser

//   public getUser() {
//     let userstr = sessionStorage.getItem("user");
//     if(userstr != null) {
//       return JSON.parse(userstr);
//     }else {
//       this.logout();
//       return null;
//     }
//   }

//   //get user details

//   public getUserRole() {
//     let user = this.getUser();
//     return user.authorities[0].authority
//   }

// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './Helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  // Get Current user which is :  Loggedin user
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }

  // Genrate Token
  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  // LoginUser : set Token in local user

  public loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  // IsLogin : User Is login or not

  public isLoggedin() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  //Logged Out : removed token from localstorage

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // get token: Return the token and store the userDetails
  public getToken() {
    return localStorage.getItem('token');
  }

  // Set userDetails

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //getUser
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  // get User role
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
