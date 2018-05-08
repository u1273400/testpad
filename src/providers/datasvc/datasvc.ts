import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DatasvcProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatasvcProvider {

  baseurl:string="";

  constructor(public http: Http) {
  }
  public ngOnInit(){
  }
  public getData(feedUrl:string):Observable<any>{
    return this.http.get(feedUrl).map(res => res.json());
  }

}

export interface User{
  userid:string,
  email:string,
  hash:string,
  active:boolean,
  role:number
}

