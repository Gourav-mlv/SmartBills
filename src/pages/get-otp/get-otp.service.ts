import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class GetOtpService {
    baseURl :string= 'http://localhost:3000/app/loginTried';
    //url: 'http://192.168.43.11:3000/test';
    constructor(private http: HttpClient) { }
    getOtp(mno: number): Observable<any> {
        console.log("sending request to Api");
        return this.http.post(this.baseURl,{mno: mno,} );
    }
}
