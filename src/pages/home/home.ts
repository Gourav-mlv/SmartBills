import { ImageDataPage } from './../image-data/image-data';
import { Camera,CameraOptions } from '@ionic-native/Camera';
import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController, NavParams, IonicModule } from 'ionic-angular';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  myPhoto:any;
  public res : any;
  imgData:any;
  imgName:any;
  credential:any;
  mno:any;
  shouldDisable = true;
  constructor(public navParams:NavParams,public load : LoadingController,public navCtrl: NavController, private camera: Camera, public menuCtrl: MenuController ,public homeService:HomeService) {
    this.menuCtrl.toggle("left");
    this.mno=navParams.get('mno');
  }
  ionViewDidLoad() {
    this.menuCtrl.enable(true);
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
  takePhoto(){
    const options:CameraOptions={
      quality:100,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.PNG,
      mediaType:this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData)=>{
      this.myPhoto = 'data:image/png;base64,' + imageData;
      this.imgData=imageData;
    },(err)=>{
      console.log(err);
    });

  }
  getPhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.PNG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }
    this.camera.getPicture(options).then((imageData) => {
      this.myPhoto = 'data:image/png;base64,' + imageData;
      this.imgData = imageData;
    }, (err) => {
      console.log(err);
    });
  }
  extractData(){
    this.homeService.extract(this.imgName).subscribe((res: Response) => {
      console.log("extraction is Successful ");
      this.navCtrl.push(ImageDataPage, {
        res: res,
        imgnm : this.imgName,
        mno:this.mno
      });
    },
    error => {
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
      this.shouldDisable=false;
    }, 5000);
  }
  sendImageForReview(){
    let timestamp = (new Date()).getTime();
    this.imgName = 'img-'+this.mno+'-'+timestamp ;
   // this.myPhoto = this.sam.base64;
    console.log("funtion called");

    console.log("img="+this.imgName)
    this.homeService.ImgUpld(this.imgName,this.myPhoto).subscribe((res: Response) => {
      console.log("image upload is Successful ");
      this.presentLoading();
    },
    error => {
      console.log(error, "error");
    });
    //this.navCtrl.push(ImageDataPage);
  }
// Enable button
}
