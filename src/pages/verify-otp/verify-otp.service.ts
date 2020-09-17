import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VerifyService {
    
    baseURL: string = 'https://api.msg91.com/api/v5/otp?authkey=329039AEVFbxMMy9n5ebbdf3fP1&template_id=5ebbdf67d6fc051be8752693&extra_param={}&mobile=';
    baseURL2: string = '&invisible=1&otp=';
    url: string = 'http://localhost:3000/app/';

    constructor(private http: HttpClient) { 

    }

    verifyOtp(id : number,otp: number, mno: number) {
        return new Observable(observer => {
            this.http.post(this.url+'loginVerify',{id_no: id ,otp : otp,mno : mno ,}).subscribe(
                res => {
                    observer.next(res);
                },
                err => {
                    observer.error(err);
                }
            )
        });
    }
 
    rescendOtp(mno: number) {
        return this.http.post('https://api.msg91.com/api/v5/otp/retry?mobile=' + mno + '&authkey=329039AEVFbxMMy9n5ebbdf3fP1', mno)
    }
    resendOtp(mno: any) {
        return new Observable(observer => {
            console.log(this.url);
            this.http.post(this.url+'loginResend', {mno : mno }).subscribe(
                res => {
                    observer.next(res);
                },
                err => {
                    observer.error(err);
                }
            )
        });
    }
}{}