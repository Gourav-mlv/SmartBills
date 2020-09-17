import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class GetOtpService {
   // baseURL: string = 'https://api.msg91.com/api/v5/otp?authkey=329039AEVFbxMMy9n5ebbdf3fP1&template_id=5ebbdf67d6fc051be8752693&extra_param={}&mobile=';
  //  baseURL2: string = '&invisible=1&otp=';

    baseURl :string= 'http://localhost:3000/app/loginTried';
    //url: 'http://192.168.43.11:3000/test';
    constructor(private http: HttpClient) { }
    getOtp(mno: number): Observable<any> {
        console.log("sending request to Api");
        return this.http.post(this.baseURl,{mno: mno,} );
    }
}