import { ImagedataService } from './../pages/image-data/image-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { InvoicePage } from './../pages/invoice/invoice';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ImageDataPage} from '../pages/image-data/image-data';
import { GetOtpPage } from '../pages/get-otp/get-otp';
import { VerifyOtpPage } from '../pages/verify-otp/verify-otp';

import { Camera } from '@ionic-native/Camera';
import { VerifyService} from '../pages/verify-otp/verify-otp.service';
import { GetOtpService} from '../pages/get-otp/get-otp.service';

import { HttpClientModule } from '@angular/common/http';
import {HomeService} from '../pages/home/home.service';
import{ListOfRequestPage} from '../pages/listOfRequest/listOfRequest';
import {ListOfRequestService} from '../pages/listOfRequest/listOfRequest.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GetOtpPage,
    VerifyOtpPage,
    InvoicePage,
    ListOfRequestPage,
    ImageDataPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GetOtpPage,
    HomePage,
    VerifyOtpPage,
    InvoicePage,
    ImageDataPage,
    ListOfRequestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    GetOtpService,
    VerifyService,
    HomeService,
    ImagedataService,
    ListOfRequestService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
