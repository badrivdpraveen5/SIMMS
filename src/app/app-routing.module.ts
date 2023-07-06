import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminloginComponent } from './homepage/adminlogin/adminlogin.component';
import { FacultyloginComponent } from './homepage/facultylogin/facultylogin.component';
import { StudentloginComponent } from './homepage/studentlogin/studentlogin.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomepageComponent,
  children:[
    {path:'adminlogin',component:AdminloginComponent},
    {path:'facultylogin',component:FacultyloginComponent},
    {path:'studentlogin',component:StudentloginComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
