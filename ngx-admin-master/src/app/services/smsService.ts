import {NgModule} from '@angular/core'; 
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
export class SMSService {

    url:string = 'http://52.210.40.66:5000/sendsms';

    constructor(private http: HttpClient){
            
    }

    sendVerificationCode(phoneNumber:string, verificationNumber:string){

        const req = this.http.post(this.url, {
            code: verificationNumber,
            phone_num: phoneNumber, 
          })
            .subscribe(
              res => {
                debugger;
                console.log(res);
              },
              err => {
                console.log("Error occured");
              }
            );
    }

    sendNotificationToParents(phoneNumber:string, personName:string){
        
                const req = this.http.post(this.url, {
                    name: personName,
                    phone_num: phoneNumber, 
                  })
                    .subscribe(
                      res => {
                        debugger;
                        console.log(res);
                      },
                      err => {
                        console.log("Error occured");
                      }
                    );
            }

}