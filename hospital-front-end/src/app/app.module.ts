import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common'
import { MatNativeDateModule  } from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';



import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component'
import { AuthInterceptor } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { PatitentdashboardComponent } from './pages/patitent/patitentdashboard/patitentdashboard.component';
import { DoctordashboardComponent } from './pages/doctor/doctordashboard/doctordashboard.component';
import { ReceptionistdashboardComponent } from './pages/Receptionist/receptionistdashboard/receptionistdashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { DoctorSidebarComponent } from './pages/doctor/doctor-sidebar/doctor-sidebar.component';
import { DoctorWelcomeComponent } from './pages/doctor/doctor-welcome/doctor-welcome.component';
import { ReceptionistSidebarComponent } from './pages/Receptionist/receptionist-sidebar/receptionist-sidebar.component';
import { ReceptionistWelcomeComponent } from './pages/Receptionist/receptionist-welcome/receptionist-welcome.component';
import { PatientSidebarComponent } from './pages/patitent/patient-sidebar/patient-sidebar.component';
import { PatientWelcomeComponent } from './pages/patitent/patient-welcome/patient-welcome.component';
import { AddCategoriesComponent } from './pages/doctor/add-categories/add-categories.component';
import { ViewCategoriesComponent } from './pages/doctor/view-categories/view-categories.component';
import { ViewDoctorsComponent } from './pages/doctor/view-doctors/view-doctors.component';
import { AddDoctorComponent } from './pages/doctor/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './pages/doctor/update-doctor/update-doctor.component';
import { BookAppointmentComponent } from './pages/patitent/book-appointment/book-appointment.component';
import { LoadDepartmentComponent } from './pages/patitent/load-department/load-department.component';
import { LoadDoctorComponent } from './pages/patitent/load-doctor/load-doctor.component';
import { ShowAppointmentComponent } from './pages/patitent/show-appointment/show-appointment.component';
import { ViewDepartmentComponent } from './pages/admin/view-department/view-department.component';
import { AddDepartmentComponent } from './pages/admin/add-department/add-department.component';
import { UpdateDoctorsDetailsComponent } from './pages/admin/update-doctors-details/update-doctors-details.component';
import { ShowDoctorsAppointmentComponent } from './pages/admin/show-doctors-appointment/show-doctors-appointment.component';
import { ShowDoctorsComponent } from './pages/admin/show-doctors/show-doctors.component';


//import { EncrDecrService } from './services/encr-decr.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    PatitentdashboardComponent,
    DoctordashboardComponent,
    ReceptionistdashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    DoctorSidebarComponent,
    DoctorWelcomeComponent,
    ReceptionistSidebarComponent,
    ReceptionistWelcomeComponent,
    PatientSidebarComponent,
    PatientWelcomeComponent,
    AddCategoriesComponent,
    ViewCategoriesComponent,
    ViewDoctorsComponent,
    AddDoctorComponent,
    UpdateDoctorComponent,
    BookAppointmentComponent,
    LoadDepartmentComponent,
    LoadDoctorComponent,
    ShowAppointmentComponent,
    ViewDepartmentComponent,
    AddDepartmentComponent,
    UpdateDoctorsDetailsComponent,
    ShowDoctorsAppointmentComponent,
    ShowDoctorsComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule
    
  ],
  providers:[
    { provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true },
    DatePipe
    //EncrDecrService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
