import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminloginComponent } from './homepage/adminlogin/adminlogin.component';
import { FacultyloginComponent } from './homepage/facultylogin/facultylogin.component';
import { StudentloginComponent } from './homepage/studentlogin/studentlogin.component';
import { HomeComponent } from './homepage/home/home.component';
import { AboutusComponent } from './homepage/aboutus/aboutus.component';
import { ContactusComponent } from './homepage/contactus/contactus.component';

const routes: Routes = [
  {path:'',redirectTo:'home/index',pathMatch:'full'},
  {path:'home',component:HomepageComponent,
  children:[
    {path:'index',component:HomeComponent},
    {path:'adminlogin',component:AdminloginComponent},
    {path:'facultylogin',component:FacultyloginComponent},
    {path:'studentlogin',component:StudentloginComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
