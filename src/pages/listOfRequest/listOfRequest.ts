import { ShowDataPage } from '../showData/showData';
import {ListOfRequestService} from '../listOfRequest/listOfRequest.service';
import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
    selector: 'page-listOfRequest',
    templateUrl: 'listOfRequest.html',
})

export class ListOfRequestPage {
    //statusCode: number;
    allRequests=null;
    mno:any;

    constructor( public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController , public listofreqservice : ListOfRequestService) {
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
        this.navCtrl.push(HomePage);
    }
    // filterData(num: number) {
    //     this.statusCode = num;
    //     console.log(this.statusCode);
    // }
    

    showAllrequests(){
        console.log("Showing all pending request ");
        try {
          this.listofreqservice.getAllRequests(this.mno)    // is page p mobile number laana hai! taaki parameter m bhej ske
            .subscribe((res: Response) => {
              this.allRequests=res;
              console.log(res);
             
            },
              error => {
                console.log(error, "error");
              })
        } catch (e) {
          console.log(e);
        }
      }

}