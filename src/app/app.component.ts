import { HomePage } from './../pages/home/home';
import { GetOtpPage } from './../pages/get-otp/get-otp';
import { ListOfRequestPage} from './../pages/listOfRequest/listOfRequest';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InvoicePage} from './../pages/invoice/invoice';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = GetOtpPage;//Changed to HomePage, GetOtpPage before

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  logout(){
    this.nav.push(GetOtpPage);
  }
  getAllInvoice(){
    console.log('All invoice clicked');
    this.nav.push(ListOfRequestPage);              
  }
  getPendingInvoice(){
    console.log('Pending invoice clicked');
    this.nav.push(ListOfRequestPage);
  }
  getApprovedInvoice(){
    console.log('Approved invoice clicked');
    this.nav.push(ListOfRequestPage);
  }
}

