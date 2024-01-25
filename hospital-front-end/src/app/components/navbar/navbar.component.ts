import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserActive = false;
  user :any = [];

  constructor(public login:LoginService) {}

  ngOnInit(): void {
    this.isUserActive = this.login.isLoggedin();
    this.user = this.login.getUser();

    
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isUserActive = this.login.isLoggedin();
      this.user = this.login.getUser();
    });
  }
  
  


  public logout() {
    this.login.logout();
    window.location.reload();
  }
}
