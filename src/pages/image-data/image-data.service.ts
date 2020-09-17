import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImagedataService {
   
    url: string = 'http://localhost:3000/app/crt_rqst'; 
    
    constructor(private http: HttpClient) { }

    saveDB(phone,bill_amount,bill_date,bill_company,bill_image):Observable<any>{
      return this.http.post(this.url,{ phone:phone,bill_amount:bill_amount,bill_date:bill_date,bill_company:bill_company,bill_image:bill_image,});
    }
    
}
