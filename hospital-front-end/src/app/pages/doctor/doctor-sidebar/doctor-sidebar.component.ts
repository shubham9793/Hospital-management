import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-doctor-sidebar',
  templateUrl: './doctor-sidebar.component.html',
  styleUrls: ['./doctor-sidebar.component.css']
})
export class DoctorSidebarComponent implements OnInit {
  ngOnInit(): void {
   
  }
  constructor(private login:LoginService) {}

  public logout() {
    this.login.logout();
    window.location.reload();
  }


}
