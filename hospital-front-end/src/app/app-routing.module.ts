import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './pages/admin/add-department/add-department.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ShowDoctorsAppointmentComponent } from './pages/admin/show-doctors-appointment/show-doctors-appointment.component';
import { ShowDoctorsComponent } from './pages/admin/show-doctors/show-doctors.component';
import { UpdateDoctorsDetailsComponent } from './pages/admin/update-doctors-details/update-doctors-details.component';
import { ViewDepartmentComponent } from './pages/admin/view-department/view-department.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddCategoriesComponent } from './pages/doctor/add-categories/add-categories.component';
import { AddDoctorComponent } from './pages/doctor/add-doctor/add-doctor.component';
import { DoctorWelcomeComponent } from './pages/doctor/doctor-welcome/doctor-welcome.component';
import { DoctordashboardComponent } from './pages/doctor/doctordashboard/doctordashboard.component';
import { UpdateDoctorComponent } from './pages/doctor/update-doctor/update-doctor.component';
import { ViewCategoriesComponent } from './pages/doctor/view-categories/view-categories.component';
import { ViewDoctorsComponent } from './pages/doctor/view-doctors/view-doctors.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BookAppointmentComponent } from './pages/patitent/book-appointment/book-appointment.component';
import { LoadDoctorComponent } from './pages/patitent/load-doctor/load-doctor.component';
import { PatientWelcomeComponent } from './pages/patitent/patient-welcome/patient-welcome.component';
import { PatitentdashboardComponent } from './pages/patitent/patitentdashboard/patitentdashboard.component';
import { ShowAppointmentComponent } from './pages/patitent/show-appointment/show-appointment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReceptionistWelcomeComponent } from './pages/Receptionist/receptionist-welcome/receptionist-welcome.component';
import { ReceptionistdashboardComponent } from './pages/Receptionist/receptionistdashboard/receptionistdashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminGuard } from './services/admin.guard';
import { DoctorGuard } from './services/doctor.guard';
import { PatientGuard } from './services/patient.guard';
import { ReceptionistGuard } from './services/receptionist.guard';

// Createing router link
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    // pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    // pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    // pathMatch: 'full',
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'categories',
        component: ViewDepartmentComponent,
      },
      {
        path: 'add-categories',
        component: AddDepartmentComponent,
      },
      {
        path: 'doctors',
        component: ShowDoctorsComponent,
      },
      {
        path: 'add-doctor',
        component: AddDoctorComponent,
      },
      {
        path: 'update-doctor/:doctorId',
        component: UpdateDoctorsDetailsComponent,
      },
      {
        path: 'load-appointments/:doctorId',
        component: ShowDoctorsAppointmentComponent,
      },
    ],
  },

  {
    path: 'doctor',
    component: DoctordashboardComponent,
    // pathMatch: 'full',
    canActivate: [DoctorGuard],
    children: [
      {
        path: '',
        component: DoctorWelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'categories',
        component: ViewCategoriesComponent,
      },
      {
        path: 'add-categories',
        component: AddCategoriesComponent,
      },
      {
        path: 'doctors',
        component: ViewDoctorsComponent,
      },
      {
        path: 'add-doctor',
        component: AddDoctorComponent,
      },
      {
        path: 'update-doctor/:doctorId',
        component: UpdateDoctorComponent,
      },
      {
        path: 'load-appointments/:doctorId',
        component: ShowDoctorsAppointmentComponent,
      },
    ],
  },
  {
    path: 'receptionist',
    component: ReceptionistdashboardComponent,
    // pathMatch: 'full',
    canActivate: [ReceptionistGuard],
    children: [
      {
        path: '',
        component: ReceptionistWelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
  {
    path: 'patient',
    component: PatitentdashboardComponent,
    // pathMatch: 'full',
    canActivate: [PatientGuard],
    children: [
      {
        path: '',
        component: PatientWelcomeComponent,
      },
      {
        path: ':catId',
        component: LoadDoctorComponent,
      },
      {
        path: 'book-appointment/:doctorId',
        component: BookAppointmentComponent,
      },
      {
        // path:'show-appointment/:doctorId/:userId',
        path: 'show-appointments/:userId',
        component: ShowAppointmentComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
