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

  users:User[];
  emails:string[];
  email:string='';
  username:string='';
  ustyle:string;
  ushow:boolean = true;
  emsg:string
  cstyle=function(){
    // if(this.username.trim().length==0 || this.email.trim().length==0)
    //   this.ustyle='black';
    return this.ustyle
  }

  constructor(private ds:DatasvcProvider, public navCtrl: NavController, public navParams: NavParams) {
    //this.ds.getData('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
    this.ds.getData('assets/app.config.json').subscribe((data)=>{
        this.ds.baseurl=data.islocalhost?data.lurl:data.rurl;
        this.ds.getData(this.ds.baseurl+'allusers').subscribe((data)=>{
            console.log(data);
            this.users=data;
        });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  loginOrAn(){
    if(this.validated()){
      window.location.href="https://selene.hud.ac.uk/u1273400/www/vwbibled";
    }
  }

  signupClick(){
    if(this.email.length==0){
      this.ushow= !this.ushow;
      return;
    }
    let data={userid:this.username,email:this.email,hash:'1',active:true,role:0}
    if(this.svalidated()){
        console.log('saving '+JSON.stringify(data));
        this.ds.saveData(this.ds.baseurl+'saveuser',data).subscribe((data)=>{
            console.log(data);
        });
      //window.location.href="https://selene.hud.ac.uk/u1273400/www/vwbibled";
    }
  }

  svalidated(){
    this.ustyle="red";
    if(this.username.trim().length===0 || this.username=="No User Name Entered"){
      this.username="No User Name Entered";
      return false;
    }
    if(this.email.trim().length===0 || this.username=="No Email Entered"){
      this.email="No Email Entered";
      return false;
    }
    if(this.users.find(o => o.userid === this.username)){
      this.username="username already exists please choose another";
      return false;
    }
    if(this.users.find(o => o.email === this.email)){
      this.email="Email already exists please choose another";
      return false;
    }
    this.ustyle="black";
    return true;
  }
  validated(){
    this.ustyle="black";
    if(this.users.find(o => o.userid === this.username)){
      return true;
    }
    this.username="The user does not exist";
    this.ustyle="red";
    return false;
  }
}

