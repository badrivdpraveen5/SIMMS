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
import { StudentregComponent } from './admin/studentreg/studentreg.component';
import { FacultyregComponent } from './admin/facultyreg/facultyreg.component';
import { SubjectmapComponent } from './admin/subjectmap/subjectmap.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomepageComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'adminlogin',component:AdminloginComponent},
    {path:'facultylogin',component:FacultyloginComponent},
    {path:'studentlogin',component:StudentloginComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent}
  ]
},
{path:'admin',component:AdminComponent,
  children:[
    {path:'',component:AdmindashboardComponent},
    {path:'stureg',component:StudentregComponent},
    {path:'facreg',component:FacultyregComponent},
    {path:'submap',component:SubjectmapComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
