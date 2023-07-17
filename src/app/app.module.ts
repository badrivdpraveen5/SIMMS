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
import { StudentregComponent } from './hod/studentreg/studentreg.component';
import { FacultyregComponent } from './hod/facultyreg/facultyreg.component';
import { SubjectmapComponent } from './hod/subjectmap/subjectmap.component';
import { HodloginComponent } from './homepage/hodlogin/hodlogin.component';
import { HodComponent } from './hod/hod.component';
import { HoddashoardComponent } from './hod/hoddashoard/hoddashoard.component';
import { LockmarksComponent } from './admin/admindashboard/lockmarks/lockmarks.component';
import { ViewmarksComponent } from './student/viewmarks/viewmarks.component';
import { MarksupdateComponent } from './faculty/marksupdate/marksupdate.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HodregComponent } from './admin/hodreg/hodreg.component';
import { StuprofileComponent } from './student/stuprofile/stuprofile.component';
import { FacultyViewMarksComponent } from './faculty/faculty-view-marks/faculty-view-marks.component';
import { MarksenterComponent } from './faculty/marksupdate/marksenter/marksenter.component';
import { HodViewMarksComponent } from './hod/hod-view-marks/hod-view-marks.component';
import { AdminViewMarksComponent } from './admin/admin-view-marks/admin-view-marks.component';
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
    SubjectmapComponent,
    HodloginComponent,
    HodComponent,
    HoddashoardComponent,
    LockmarksComponent,
    ViewmarksComponent,
    MarksupdateComponent,
    ChangepasswordComponent,
    HodregComponent,
    StuprofileComponent,
    FacultyViewMarksComponent,
    MarksenterComponent,
    HodViewMarksComponent,
    AdminViewMarksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
