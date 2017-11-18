import { Component, OnInit } from '@angular/core';
import { MockData } from '../../model/MockData'; 
import {Router, ActivatedRoute, Params} from '@angular/router';
import {SMSService} from '../../services/smsService'

import { HttpClient } from '@angular/common/http';
import { Adult } from '../../model/Kid';
@Component({
  selector: 'ngx-components',
  templateUrl: "./components.component.html",
  styleUrls: ["./components.component.css"]
})

export class ComponentsComponent implements OnInit {

  mock = new MockData();
  kid = null;
  code="000000";
  smsService:SMSService;
  constructor(private activatedRoute: ActivatedRoute, http: HttpClient) {
    this.smsService = new SMSService(http);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => { 
      this.kid = this.mock.kidsMock.filter(kid => kid.id + '' === params['id'])[0];

      this.kid.photoUrl = 'url(' + 'assets/images/' + this.kid.photoUrl + ')';


      console.log(this.kid);
    });
  }

  sendSms(phoneNumber:string, personName:string){
    this.code = this.generateNumber()+''; 
    console.log(this.code);
    this.smsService.sendVerificationCode(phoneNumber,this.code)

    for(let i =0;i<this.kid.parents.length;i++){
      this.smsService.sendNotificationToParents(this.kid.parents[i].phoneNumber, personName);
    }
  }

  generateNumber(){
    return Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;
  }
 


}
