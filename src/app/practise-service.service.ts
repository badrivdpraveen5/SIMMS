import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PractiseServiceService {

  constructor(private http:HttpClient) {
   }
   public loginservice():Observable<any>{
    return this.http.get("http://localhost:9000/login");
   }
}
