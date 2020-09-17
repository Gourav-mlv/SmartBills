import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetOtpPage } from '../get-otp/get-otp';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MenuController } from 'ionic-angular';
import { VerifyService } from '../verify-otp/verify-otp.service'

@Component({
  selector: 'page-verify-otp',
  templateUrl: 'verify-otp.html',
})

export class VerifyOtpPage {

  public mno;
  public otp;
  public id ;
  public name ;
  public disableVerifyOtp: boolean = false;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public verfiyService:VerifyService,public navParams: NavParams,public menuCtrl:MenuController) {
    this.mno = navParams.get('item');
    this.id= navParams.get('obj');
  }

  submitted=false;
  ionViewDidLoad() {
    this.menuCtrl.enable(false);
    console.log('ionViewDidLoad VerifyOtpPage');
  }
  showAlert(message : string ) {
    const alert = this.alertCtrl.create({
      title: '',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
  
  changeNumber(){
    this.navCtrl.push(GetOtpPage);
  }
  resendOtp(){
    console.log('Resend OTP started');
    try {
      this.verfiyService.resendOtp(this.mno)
        .subscribe((res: Response) => {
          console.log(res);
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  verifyOtp(){
    console.log('Verification of OTP started');
    this.verfiyService.verifyOtp(this.id,this.otp, this.mno).subscribe(
      res =>{
        if ((res["name"]!=undefined ){
          if(res["name"]=="New Employee"){
            this.showAlert('your are new entry');
          }else{
            this.showAlert('Verification Successful.  for ' + res["name"]);
            this.name =  res["name"] ;
          }
          //Alert Logic when successful
          console.log(res);
          this.navCtrl.push(HomePage,{
            mno:this.mno
          });
          //alert("Verification Success");
        }else{
          //Alert Check OTP 
          this.showAlert('Please check Your OTP.');
          // alert("Check your OTP");
        }
     /* if ((res["message"]=="OTP verified success")||(res["message"]=="Mobile no. already verified") ){
        
        //Alert Logic when successful
        this.showAlert('Verification Successful.');
        console.log(res);
        this.navCtrl.push(HomePage,{
          mno:this.mno
        });
        //alert("Verification Success");
      }else{
        //Alert Check OTP 
        this.showAlert('Please check Your OTP.');
        // alert("Check your OTP");
      }
    */},
      error => console.log(error)
    )
  }
}
