import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListOfRequestService {
   
    url: string = 'http://localhost:3000//app/all_rqst?phone=';   //get request parameters
    
    constructor(private http: HttpClient) { }
    
    getAllRequests(phone:string):Observable<any>{
      return this.http.get(this.url+phone);
    }
    
}
