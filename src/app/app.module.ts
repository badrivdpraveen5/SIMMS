import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminloginComponent } from './homepage/adminlogin/adminlogin.component';
import { FacultyloginComponent } from './homepage/facultylogin/facultylogin.component';
import { StudentloginComponent } from './homepage/studentlogin/studentlogin.component';
import { HomeComponent } from './homepage/home/home.component';
import { AboutusComponent } from './homepage/aboutus/aboutus.component';
import { ContactusComponent } from './homepage/contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { FacultydashboardComponent } from './faculty/facultydashboard/facultydashboard.component';
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';
import { StudentregComponent } from './admin/studentreg/studentreg.component';
import { FacultyregComponent } from './admin/facultyreg/facultyreg.component';
import { SubjectmapComponent } from './admin/subjectmap/subjectmap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminloginComponent,
    FacultyloginComponent,
    StudentloginComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    AdminComponent,
    FacultyComponent,
    StudentComponent,
    AdmindashboardComponent,
    FacultydashboardComponent,
    StudentdashboardComponent,
    StudentregComponent,
    FacultyregComponent,
    SubjectmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
