//import * as aws from "aws-sdk";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {
    //url2: string ='http://localhost:3000/getCredential';    //route to be added into node server.
    url: string = 'http://localhost:3000/app/ImgUplod'; 
    url2:string = 'http://localhost:3000/app/extract'; 
    //url: string ='http://192.168.43.11:3000/ImgUplod';    //route to be added into node server.
    constructor(private http: HttpClient) { }

    ImgUpld(imgNm,imgDt):Observable<any>{
      return this.http.post(this.url,{imgName : imgNm,imageDt : imgDt });
    }
    extract(imgNm){
      return this.http.post(this.url2,{imgName : imgNm });
    }
    // getCredential(m_no:number) :Observable<any> { 
    //     console.log("sending request for Credentials to server");
    //    return this.http.get(this.url,{ mno: m_no ,});
    // }
    /*

    uploadToS3(imgName,image,credential) {
        return new Promise((resp, error) => {
          aws.config.region = 'us-east-2'//this.SYSTEM_VARIABLE.REGION;
           
          var s3 = new aws.S3({
            accessKeyId:'##############',   //needs to replaced from credential
            secretAccessKey:'######################'    //needs to replaced from credential
            // ,apiVersion: "2006-03-01",
            // params: { Bucket: this.SYSTEM_VARIABLE.S3.BUCKET_NAME }
          });
      
          let buf = new Buffer(image, "base64");
      
          var data = {
            Bucket:  'aztecs', // this.SYSTEM_VARIABLE.S3.BUCKET_NAME,
            Key: imgName,
            Body: buf,
            ContentEncoding: "base64",
            ContentType: "image/jpeg"
          };
      
          s3.putObject(data, (err, res) => {
            if (err) {
                console.log(err);
            } else {
              console.log(res);
            }
          });
        });
      }*/
}
