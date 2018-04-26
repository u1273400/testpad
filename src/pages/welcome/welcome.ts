import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatasvcProvider } from '../../providers/datasvc/datasvc';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {



  constructor(private ds:DatasvcProvider, public navCtrl: NavController, public navParams: NavParams) {
    //this.ds.getData('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
    this.ds.getData('assets/app.config.json').subscribe((data)=>{
        ds.baseurl=data.islocalhost?data.lurl:data.rurl;
        this.ds.getData(ds.baseurl+'allusers').subscribe((data)=>{
            console.log(data);
          });
    });  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  loginOrAn(){
    window.location.href="https://selene.hud.ac.uk/u1273400/www/vwbibled";
  }

}
