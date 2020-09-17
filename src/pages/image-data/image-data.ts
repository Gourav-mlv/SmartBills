import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImagedataService} from '../image-data/image-data.service';
import { ListOfRequestPage} from '../listOfRequest/listOfRequest';

@Component({
    selector: 'page-image-data',
    templateUrl: 'image-data.html',
})
export class ImageDataPage {
    public res:any;
    public Date:any;
    public Amount:any;
    public Company:any;
    public imgNm:any;
    public mno:any;
   // selectedbillData=null;
    constructor(public lorp:ListOfRequestPage,public navCtrl: NavController, public navParams: NavParams ,public imagedataservice : ImagedataService ) {
       
        this.res = navParams.get('res');
        console.log(this.res);
        debugger
        this.imgNm = navParams.get('imgnm');
        console.log(this.imgNm);
        this.mno = navParams.get('mno');
      }
    
    ionViewDidLoad() {
        console.log('imageData.ts ionViewDidLoad ImageDataPage');
    }
    
    
    submit_bill(){
      this.Date = this.res['Date '];
      this.Amount = this.res['Amount '];
      this.Company = this.res['Company '];
      console.log("action done");
    try {
      this.imagedataservice.saveDB(this.mno, this.Amount, this.Date, this.Company, this.imgNm )
        .subscribe((res: Response) => {
          console.log(res);
          this.navCtrl.push(ListOfRequestPage,{
            mno:this.mno
          });
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
    

    }



}