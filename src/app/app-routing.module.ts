import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminloginComponent } from './homepage/adminlogin/adminlogin.component';
import { FacultyloginComponent } from './homepage/facultylogin/facultylogin.component';
import { StudentloginComponent } from './homepage/studentlogin/studentlogin.component';
import { HomeComponent } from './homepage/home/home.component';
import { AboutusComponent } from './homepage/aboutus/aboutus.component';
import { ContactusComponent } from './homepage/contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { StudentregComponent } from './hod/studentreg/studentreg.component';
import { FacultyregComponent } from './hod/facultyreg/facultyreg.component';
import { SubjectmapComponent } from './hod/subjectmap/subjectmap.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultydashboardComponent } from './faculty/facultydashboard/facultydashboard.component';
import { HodloginComponent } from './homepage/hodlogin/hodlogin.component';
import { HodComponent } from './hod/hod.component';
import { HoddashoardComponent } from './hod/hoddashoard/hoddashoard.component';
import { LockmarksComponent } from './admin/admindashboard/lockmarks/lockmarks.component';
import { ViewmarksComponent } from './student/viewmarks/viewmarks.component';
import { MarksupdateComponent } from './faculty/marksupdate/marksupdate.component';
import { StudentComponent } from './student/student.component';
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HodregComponent } from './admin/hodreg/hodreg.component';
import { StuprofileComponent } from './student/stuprofile/stuprofile.component';
import { FacultyViewMarksComponent } from './faculty/faculty-view-marks/faculty-view-marks.component';
import { AdminViewMarksComponent } from './admin/admin-view-marks/admin-view-marks.component';
import { PractiseComponent } from './practise/practise.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomepageComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'adminlogin',component:AdminloginComponent},
    {path:'facultylogin',component:FacultyloginComponent},
    {path:'studentlogin',component:StudentloginComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'hodlogin',component:HodloginComponent}
  ]
},
{path:'admin',component:AdminComponent,
  children:[
    {path:'',component:AdmindashboardComponent},
    {path:'lockmarks',component:LockmarksComponent},
    {path:'viewmarks',component:AdminViewMarksComponent},
    {path:'pwd',component:ChangepasswordComponent},
    {path:'hodreg',component:HodregComponent}
  ]
},
{path:'faculty',component:FacultyComponent,
  children:[
    {path:'',component:FacultydashboardComponent},
    {path:'marksupdate',component:MarksupdateComponent},
    {path:'viewmarks',component:FacultyViewMarksComponent},
    {path:'pwd',component:ChangepasswordComponent}
  ]
},
{path:'hod',component:HodComponent,
  children:[
    {path:'',component:HoddashoardComponent},
    {path:'stureg',component:StudentregComponent},
    {path:'facreg',component:FacultyregComponent},
    {path:'submap',component:SubjectmapComponent},
    {path:'pwd',component:ChangepasswordComponent},
    {path:'marksupdate',component:MarksupdateComponent},
    {path:'viewmarks',component:FacultyViewMarksComponent}
  ]
},
{path:'student',component:StudentComponent,
  children:[
    {path:'',component:StudentdashboardComponent},
    {path:'viewmarks',component:ViewmarksComponent},
    {path:'pwd',component:ChangepasswordComponent},
    {path:'profile',component:StuprofileComponent}
  ]
},
{
  path:'practise',component:PractiseComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
