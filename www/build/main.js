webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetOtpPage; });
/* unused harmony export var1 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify_otp_verify_otp__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__get_otp_get_otp_service__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let GetOtpPage = class GetOtpPage {
    constructor(alertCtrl, navCtrl, getOtpService, navParams, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.getOtpService = getOtpService;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
    }
    showAlert() {
        const alert = this.alertCtrl.create({
            title: 'Incorrect Mobile no.',
            subTitle: 'Please check your no.',
            buttons: ['OK']
        });
        alert.present();
    }
    ionViewDidLoad() {
        this.menuCtrl.enable(false);
        console.log('ionViewDidLoad GetOtpPage');
    }
    generateOtp() {
        try {
            this.getOtpService.getOtp(this.mno)
                .subscribe((res) => {
                console.log(res);
                this.id = res["id"];
                this.test(this.id, this.mno);
            }, error => {
                console.log(error, "error");
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    test(obj, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__verify_otp_verify_otp__["a" /* VerifyOtpPage */], {
            item: this.mno,
            obj: this.id
        });
    }
};
GetOtpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-get-otp',template:/*ion-inline-start:"F:\Mobile-APP\EASystem-master\src\pages\get-otp\get-otp.html"*/`<ion-content padding>\n    <h1 text-center>Welcome to Smart Bills</h1>\n    <div id = "textfield">\n       <ion-item >\n          <ion-label for="num" floating>Mobile Number.</ion-label>\n          <ion-input type="text" [(ngModel)]="mno" value="91" required ></ion-input>\n       </ion-item>\n        <div style="text-align: center;padding:80px;">\n          <button  ion-button  round outline (click)="generateOtp()" >Generate OTP</button>\n        </div>\n    </div>\n</ion-content>\n`/*ion-inline-end:"F:\Mobile-APP\EASystem-master\src\pages\get-otp\get-otp.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__get_otp_get_otp_service__["a" /* GetOtpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
], GetOtpPage);

var var1 = this.mno;
//# sourceMappingURL=get-otp.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_data_image_data__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_Camera__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_service__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let HomePage = class HomePage {
    constructor(navParams, load, navCtrl, camera, menuCtrl, homeService) {
        this.navParams = navParams;
        this.load = load;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.menuCtrl = menuCtrl;
        this.homeService = homeService;
        this.shouldDisable = true;
        this.menuCtrl.toggle("left");
        this.mno = navParams.get('mno');
    }
    // async presentLoading() {
    //   const loading = await this.load.create({
    //     cssClass: 'my-custom-class',
    //     message: 'Please wait while we Extract the Bill',
    //     duration: 5000
    //   });
    //   await loading.present();
    //   const { role, data } = await loading.onDidDismiss();
    //   console.log('Loading dismissed!');
    // }
    takePhoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.myPhoto = 'data:image/png;base64,' + imageData;
            this.imgData = imageData;
        }, (err) => {
            console.log(err);
        });
    }
    getPhoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then((imageData) => {
            this.myPhoto = 'data:image/png;base64,' + imageData;
            this.imgData = imageData;
        }, (err) => {
            console.log(err);
        });
    }
    extractData() {
        this.homeService.extract(this.imgName).subscribe((res) => {
            console.log("extraction is Successful ");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__image_data_image_data__["a" /* ImageDataPage */], {
                res: res,
                imgnm: this.imgName,
                mno: this.mno
            });
        }, error => {
            console.log(error, "error");
        });
    }
    presentLoading() {
        let loading = this.load.create({
            content: 'Please wait while we extract the Data !'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
            this.shouldDisable = false;
        }, 5000);
    }
    sendImageForReview() {
        let timestamp = (new Date()).getTime();
        this.imgName = 'img-' + this.mno + '-' + timestamp;
        // this.myPhoto = this.sam.base64;
        console.log("funtion called");
        console.log("img=" + this.imgName);
        this.homeService.ImgUpld(this.imgName, this.myPhoto).subscribe((res) => {
            console.log("image upload is Successful ");
            this.presentLoading();
        }, error => {
            console.log(error, "error");
        });
        //this.navCtrl.push(ImageDataPage);
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"F:\Mobile-APP\EASystem-master\src\pages\home\home.html"*/`<ion-header>\n    <ion-title>\n      <div text-center><button ion-button menuToggle icon-only float-left>\n        <ion-icon name="menu">\n        </ion-icon>\n      </button>Home</div>\n    </ion-title>\n</ion-header>\n\n<ion-content padding>\n  Welcome to Home page\n  <button ion-button (click)="takePhoto()" color="primary" clear>Take Photo</button>\n  <button ion-button (click)="getPhoto()" color="primary" clear>Select from gallery</button>\n  <p style="text-align:center">\n    <img  src="{{myPhoto}}">\n  </p>\n  <button ion-button (click)="sendImageForReview()">Upload\n    <ion-icon name="Upload-Image"></ion-icon>\n  </button>\n   <button ion-button (click)="extractData()" [disabled]="shouldDisable">Extract\n    <ion-icon name="Extract-Data"></ion-icon>\n  </button> \n</ion-content>\n`/*ion-inline-end:"F:\Mobile-APP\EASystem-master\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_Camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__home_home_service__["a" /* HomeService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListOfRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listOfRequest_listOfRequest_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ListOfRequestPage = class ListOfRequestPage {
    constructor(navCtrl, navParams, menuCtrl, listofreqservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.listofreqservice = listofreqservice;
        //statusCode: number;
        this.allRequests = null;
        //this.statusCode = navParams.get('status');
        this.mno = navParams.get('mno');
    }
    ngOnInit() {
        this.showAllrequests();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
        this.menuCtrl.toggle("left");
    }
    login() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
    }
    // filterData(num: number) {
    //     this.statusCode = num;
    //     console.log(this.statusCode);
    // }
    showAllrequests() {
        console.log("Showing all pending request ");
        try {
            this.listofreqservice.getAllRequests(this.mno) // is page p mobile number laana hai! taaki parameter m bhej ske
                .subscribe((res) => {
                this.allRequests = res;
                console.log(res);
            }, error => {
                console.log(error, "error");
            });
        }
        catch (e) {
            console.log(e);
        }
    }
};
ListOfRequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
        selector: 'page-listOfRequest',template:/*ion-inline-start:"F:\Mobile-APP\EASystem-master\src\pages\listOfRequest\listOfRequest.html"*/`<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Invoices</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n   <!-- <ion-list  >\n\n        <ion-item >\n\n            <ion-thumbnail item-start>\n\n                <img src="">\n\n            </ion-thumbnail>\n\n            <h2>date</h2>\n\n            <p>Rejected</p>\n\n            <button ion-button clear item-end (click)="sendToShowDataPage()">View</button>\n\n        </ion-item>\n\n    </ion-list>\n\n-->\n\n<div id="list-div" >\n\n  \n\n    <table class="list-table" style="width: 100%;">\n\n      <thead>\n\n        <tr>\n\n          <th>Id</th>\n\n          <th>Image-Name</th>\n\n          <th>Amount</th>\n\n          <th>Status</th>\n\n        </tr>\n\n      </thead>\n\n      <tbody >\n\n        <tr *ngFor="let data of allRequests" (click)="sendToShowDataPage()" >\n\n          <td>{{data.ID}}</td>\n\n         <td>{{data.IMAGE_NAME}}</td> \n\n         <td>{{data.REQUESTED_AMOUNT}}</td> \n\n         \n\n          <td *ngIf="data.VERIFY_STATUS == 0">Pending</td>\n\n          <td *ngIf="data.VERIFY_STATUS == 1" style ="color: green;">Approved</td>\n\n          <td *ngIf="data.VERIFY_STATUS == 2" style="color: orangered;">Rejected</td>\n\n          \n\n        </tr>\n\n      </tbody>\n\n   \n\n  </table>\n\n  </div>\n\n</ion-content>`/*ion-inline-end:"F:\Mobile-APP\EASystem-master\src\pages\listOfRequest\listOfRequest.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_0__listOfRequest_listOfRequest_service__["a" /* ListOfRequestService */]])
], ListOfRequestPage);

//# sourceMappingURL=listOfRequest.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagedataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ImagedataService = class ImagedataService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000/app/crt_rqst';
    }
    saveDB(phone, bill_amount, bill_date, bill_company, bill_image) {
        return this.http.post(this.url, { phone: phone, bill_amount: bill_amount, bill_date: bill_date, bill_company: bill_company, bill_image: bill_image, });
    }
};
ImagedataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], ImagedataService);

//# sourceMappingURL=image-data.service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/invoice/invoice.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyOtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_otp_get_otp__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verify_otp_verify_otp_service__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let VerifyOtpPage = class VerifyOtpPage {
    constructor(alertCtrl, navCtrl, verfiyService, navParams, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.verfiyService = verfiyService;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.disableVerifyOtp = false;
        this.submitted = false;
        this.mno = navParams.get('item');
        this.id = navParams.get('obj');
    }
    ionViewDidLoad() {
        this.menuCtrl.enable(false);
        console.log('ionViewDidLoad VerifyOtpPage');
    }
    showAlert(message) {
        const alert = this.alertCtrl.create({
            title: '',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }
    changeNumber() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__get_otp_get_otp__["a" /* GetOtpPage */]);
    }
    resendOtp() {
        console.log('Resend OTP started');
        try {
            this.verfiyService.resendOtp(this.mno)
                .subscribe((res) => {
                console.log(res);
            }, error => {
                console.log(error, "error");
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    verifyOtp() {
        console.log('Verification of OTP started');
        this.verfiyService.verifyOtp(this.id, this.otp, this.mno).subscribe(res => {
            console.log(res);
            if ((res["message"] == "OTP verified success") || (res["message"] == "Mobile no. already verified")) {
                //Alert Logic when successful
                this.showAlert('Verification Successful.');
                console.log(res);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {
                    mno: this.mno
                });
                //alert("Verification Success");
            }
            else {
                //Alert Check OTP 
                this.showAlert('Please check Your OTP.');
                // alert("Check your OTP");
            }
        }, error => console.log(error));
    }
};
VerifyOtpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-verify-otp',template:/*ion-inline-start:"F:\Mobile-APP\EASystem-master\src\pages\verify-otp\verify-otp.html"*/`<ion-content padding>\n  <h1 text-center>OTP Verification</h1>\n  <div>\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Enter OTP Here:</ion-label>\n        <ion-input type="password" [(ngModel)]="otp" value=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <div>\n      <button ion-button float-left clear small (click)="changeNumber()">Change Number</button>\n      <button ion-button float-right small clear (click)="resendOtp()">Resend OTP</button>\n    </div>\n    <div style="text-align: center; padding-top: 80px;">\n      <button ion-button round outline (click)="verifyOtp()">Verify</button>\n    </div>\n  </div>\n</ion-content>`/*ion-inline-end:"F:\Mobile-APP\EASystem-master\src\pages\verify-otp\verify-otp.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__verify_otp_verify_otp_service__["a" /* VerifyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
], VerifyOtpPage);

//# sourceMappingURL=verify-otp.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_data_image_data_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listOfRequest_listOfRequest__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ImageDataPage = class ImageDataPage {
    // selectedbillData=null;
    constructor(lorp, navCtrl, navParams, imagedataservice) {
        this.lorp = lorp;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagedataservice = imagedataservice;
        this.res = navParams.get('res');
        console.log(this.res);
        debugger;
        this.imgNm = navParams.get('imgnm');
        console.log(this.imgNm);
        this.mno = navParams.get('mno');
    }
    ionViewDidLoad() {
        console.log('imageData.ts ionViewDidLoad ImageDataPage');
    }
    submit_bill() {
        this.Date = this.res['Date '];
        this.Amount = this.res['Amount '];
        this.Company = this.res['Company '];
        console.log("action done");
        try {
            this.imagedataservice.saveDB(this.mno, this.Amount, this.Date, this.Company, this.imgNm)
                .subscribe((res) => {
                console.log(res);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listOfRequest_listOfRequest__["a" /* ListOfRequestPage */], {
                    mno: this.mno
                });
            }, error => {
                console.log(error, "error");
            });
        }
        catch (e) {
            console.log(e);
        }
    }
};
ImageDataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-image-data',template:/*ion-inline-start:"F:\Mobile-APP\EASystem-master\src\pages\image-data\image-data.html"*/`<style>\n\n    td{\n\n        padding-top: 10px;\n\n        font-size: large;\n\n    }\n\n    button {\n\n        float: right;\n\n        margin: 20px;\n\n    }\n\n</style>\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Bill Details</ion-title>\n\n       \n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h1>Please confirm your details before submitting!</h1>\n\n    <table style="width: 100%;">\n\n        <tr>\n\n            <td>BILL DATE</td>\n\n            <td><input type="text" [(ngModel)]="res[\'Date \']" ></td>\n\n        </tr>\n\n        <tr>\n\n            <td>Total Amount(INR)</td>\n\n            <td><input type="text" [(ngModel)]="res[\'Amount \']"></td>\n\n        </tr>\n\n        <tr>\n\n            <td>Company</td>\n\n            <td><input type="text" [(ngModel)]="res[\'Company \']"></td>\n\n        </tr>\n\n    \n\n    </table>\n\n    <button ion-button (click)="submit_bill()"   >Submit Bill </button>\n\n</ion-content>`/*ion-inline-end:"F:\Mobile-APP\EASystem-master\src\pages\image-data\image-data.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__listOfRequest_listOfRequest__["a" /* ListOfRequestPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__image_data_image_data_service__["a" /* ImagedataService */]])
], ImageDataPage);

//# sourceMappingURL=image-data.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListOfRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ListOfRequestService = class ListOfRequestService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000//app/all_rqst?phone='; //get request parameters
    }
    getAllRequests(phone) {
        return this.http.get(this.url + phone);
    }
};
ListOfRequestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], ListOfRequestService);

//# sourceMappingURL=listOfRequest.service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import * as aws from "aws-sdk";


let HomeService = class HomeService {
    //url: string ='http://192.168.43.11:3000/ImgUplod';    //route to be added into node server.
    constructor(http) {
        this.http = http;
        //url2: string ='http://localhost:3000/getCredential';    //route to be added into node server.
        this.url = 'http://localhost:3000/app/ImgUplod';
        this.url2 = 'http://localhost:3000/app/extract';
    }
    ImgUpld(imgNm, imgDt) {
        return this.http.post(this.url, { imgName: imgNm, imageDt: imgDt });
    }
    extract(imgNm) {
        return this.http.post(this.url2, { imgName: imgNm });
    }
};
HomeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], HomeService);

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let VerifyService = class VerifyService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'https://api.msg91.com/api/v5/otp?authkey=329039AEVFbxMMy9n5ebbdf3fP1&template_id=5ebbdf67d6fc051be8752693&extra_param={}&mobile=';
        this.baseURL2 = '&invisible=1&otp=';
        this.url = 'http://localhost:3000/app/';
    }
    verifyOtp(id, otp, mno) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](observer => {
            this.http.post(this.url + 'loginVerify', { id_no: id, otp: otp, mno: mno, }).subscribe(res => {
                observer.next(res);
            }, err => {
                observer.error(err);
            });
        });
    }
    rescendOtp(mno) {
        return this.http.post('https://api.msg91.com/api/v5/otp/retry?mobile=' + mno + '&authkey=329039AEVFbxMMy9n5ebbdf3fP1', mno);
    }
    resendOtp(mno) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](observer => {
            console.log(this.url);
            this.http.post(this.url + 'loginResend', { mno: mno }).subscribe(res => {
                observer.next(res);
            }, err => {
                observer.error(err);
            });
        });
    }
};
VerifyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], VerifyService);

{ }
//# sourceMappingURL=verify-otp.service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetOtpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let GetOtpService = class GetOtpService {
    //url: 'http://192.168.43.11:3000/test';
    constructor(http) {
        this.http = http;
        // baseURL: string = 'https://api.msg91.com/api/v5/otp?authkey=329039AEVFbxMMy9n5ebbdf3fP1&template_id=5ebbdf67d6fc051be8752693&extra_param={}&mobile=';
        //  baseURL2: string = '&invisible=1&otp=';
        this.baseURl = 'http://localhost:3000/app/loginTried';
    }
    getOtp(mno) {
        console.log("sending request to Api");
        return this.http.post(this.baseURl, { mno: mno, });
    }
};
GetOtpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], GetOtpService);

//# sourceMappingURL=get-otp.service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let InvoicePage = class InvoicePage {
    constructor(navCtrl, menuCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.menuCtrl.toggle("left");
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad InvoicePage');
    }
};
InvoicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-invoice',template:/*ion-inline-start:"F:\Mobile-APP\EASystem-master\src\pages\invoice\invoice.html"*/`<ion-header>\n  <ion-title>\n    <div text-center><button ion-button menuToggle icon-only float-left>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>Invoices</div>\n  </ion-title>\n</ion-header>\n<ion-content padding>\n</ion-content>\n`/*ion-inline-end:"F:\Mobile-APP\EASystem-master\src\pages\invoice\invoice.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], InvoicePage);

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_image_data_image_data_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_invoice_invoice__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_image_data_image_data__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_get_otp_get_otp__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_verify_otp_verify_otp__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_Camera__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_verify_otp_verify_otp_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_get_otp_get_otp_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_listOfRequest_listOfRequest__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_listOfRequest_listOfRequest_service__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_get_otp_get_otp__["a" /* GetOtpPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_verify_otp_verify_otp__["a" /* VerifyOtpPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_invoice_invoice__["a" /* InvoicePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_listOfRequest_listOfRequest__["a" /* ListOfRequestPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_image_data_image_data__["a" /* ImageDataPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/invoice/invoice.module#InvoicePageModule', name: 'InvoicePage', segment: 'invoice', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_get_otp_get_otp__["a" /* GetOtpPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_verify_otp_verify_otp__["a" /* VerifyOtpPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_invoice_invoice__["a" /* InvoicePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_image_data_image_data__["a" /* ImageDataPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_listOfRequest_listOfRequest__["a" /* ListOfRequestPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_Camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_14__pages_get_otp_get_otp_service__["a" /* GetOtpService */],
            __WEBPACK_IMPORTED_MODULE_13__pages_verify_otp_verify_otp_service__["a" /* VerifyService */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_0__pages_image_data_image_data_service__["a" /* ImagedataService */],
            __WEBPACK_IMPORTED_MODULE_18__pages_listOfRequest_listOfRequest_service__["a" /* ListOfRequestService */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_get_otp_get_otp__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_listOfRequest_listOfRequest__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_get_otp_get_otp__["a" /* GetOtpPage */]; //Changed to HomePage, GetOtpPage before
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    logout() {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_0__pages_get_otp_get_otp__["a" /* GetOtpPage */]);
    }
    getAllInvoice() {
        console.log('All invoice clicked');
        this.nav.push(__WEBPACK_IMPORTED_MODULE_1__pages_listOfRequest_listOfRequest__["a" /* ListOfRequestPage */]);
    }
    getPendingInvoice() {
        console.log('Pending invoice clicked');
        this.nav.push(__WEBPACK_IMPORTED_MODULE_1__pages_listOfRequest_listOfRequest__["a" /* ListOfRequestPage */]);
    }
    getApprovedInvoice() {
        console.log('Approved invoice clicked');
        this.nav.push(__WEBPACK_IMPORTED_MODULE_1__pages_listOfRequest_listOfRequest__["a" /* ListOfRequestPage */]);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Mobile-APP\EASystem-master\src\app\app.html"*/`<ion-menu [content]="content">\n<ion-header>\n    <ion-toolbar>\n    <ion-title>Menu</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n    <button ion-item (click)="getAllInvoice()">\n        All Invoices\n    </button>\n    <button ion-item (click)="getPendingInvoice()">\n        Pending Invoices\n    </button>\n    <button ion-item (click)="getApprovedInvoice()">\n        Approved Invoices\n    </button>\n    <button ion-item (click)="logout()">\n        Logout\n    </button>\n    </ion-list>\n</ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"F:\Mobile-APP\EASystem-master\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map