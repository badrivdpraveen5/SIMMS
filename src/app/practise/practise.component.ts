import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { PractiseServiceService } from '../practise-service.service';
@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent {
  constructor(private service:PractiseServiceService){

  }
data=new FormGroup({
  uname: new FormControl(),
  pwd: new FormControl()
});
result:any;
login(formData:any){
  console.log(formData);
  this.service.loginservice().subscribe((response)=>{
    this.result=response.result;
    console.log(this.result);
  },(err)=>{
    console.log(err);
  })
}
}
