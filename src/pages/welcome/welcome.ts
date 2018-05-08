import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatasvcProvider, User } from '../../providers/datasvc/datasvc';
//import { isTrueProperty } from 'ionic-angular/util/util';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  usernames:User[];
  emails:string[];
  email:string; 
  username:string;
  ustyle:string;
  ushow:boolean = true;

  constructor(private ds:DatasvcProvider, public navCtrl: NavController, public navParams: NavParams) {
    //this.ds.getData('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
    this.ds.getData('assets/app.config.json').subscribe((data)=>{
        ds.baseurl=data.islocalhost?data.lurl:data.rurl;
        this.ds.getData(ds.baseurl+'allusers').subscribe((data)=>{
            console.log(data);
            this.usernames=data;
        });
    });
    this.username="Please enter your user name"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  loginOrAn(){
    console.log('continue')
    this.ustyle="red"
    //window.location.href="https://selene.hud.ac.uk/u1273400/www/vwbibled";
  }

  signupClick(){
    console.log('signup')
    this.email="Please enter your email"
    this.ushow= !this.ushow;
  }

}

