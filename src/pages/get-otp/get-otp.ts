import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { VerifyOtpPage } from '../verify-otp/verify-otp';
import { MenuController } from 'ionic-angular';
import { GetOtpService } from '../get-otp/get-otp.service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-get-otp',
  templateUrl: 'get-otp.html',
})

export class GetOtpPage {

  public mno: number;
  public otp;
  public id;
  public showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Incorrect Mobile no.',
      subTitle: 'Please check your no.',
      buttons: ['OK'] 
    });
    alert.present();
  }
  constructor(public alertCtrl : AlertController,public navCtrl: NavController,public getOtpService:GetOtpService, public navParams: NavParams, public menuCtrl:MenuController) {
    
  }
  submitted:false;
  ionViewDidLoad() {
    this.menuCtrl.enable(false);
    console.log('ionViewDidLoad GetOtpPage');
  }
  
  generateOtp(){
    try {
      this.getOtpService.getOtp(this.mno)
        .subscribe((res: Response) => {
          console.log(res);
          this.id=res["id"];
          this.test(this.id,this.mno);
        },
          error => {
            console.log(error, "error");
          });
        
    } catch (e) {
      console.log(e);
    }
  }

  public test(obj,item){
    this.navCtrl.push(VerifyOtpPage,{
      item:this.mno,
      obj:this.id
    });
  }

 
  
  }


  export var var1:string = this.mno;