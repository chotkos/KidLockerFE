import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {SMSService} from '../../../../services/smsService'

import { HttpClient } from '@angular/common/http';
import { Adult } from '../../../../model/Kid';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './../../../ui-features/modals/modal/modal.component';
import { MockData } from '../../../../model/MockData';
//import { setTimeout } from 'timers';

@Component({
  selector: 'kids-view',
  templateUrl: "./kids-view.component.html",
  styleUrls: ["./kids-view.component.css"]
})

export class KidsViewComponent implements OnInit {

  mock = new MockData();
  kid = null;
  code="000000";
  smsService:SMSService;
  constructor(private activatedRoute: ActivatedRoute, http: HttpClient, private modalService: NgbModal) {
    this.smsService = new SMSService(http);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => { 
      this.kid = this.mock.kidsMock.filter(kid => kid.id + '' === params['id'])[0];

      this.kid.photoUrl = 'url(' + 'assets/images/' + this.kid.photoUrl + ')';
      setTimeout(function(){
        $('.nb-tabset>ul>li>a').css('font-size','20px');
      },500);
      console.log(this.kid);
    });
  }

  sendSms(phoneNumber:string, personName:string){
    this.code = this.generateNumber()+''; 
    console.log(this.code);
    this.showLargeModal();

    //TODO odkomentować gdy smsy będą się miały wysyłać.
    this.smsService.sendVerificationCode(phoneNumber,this.code)    
    for(let i =0;i<this.kid.parents.length;i++){
      this.smsService.sendNotificationToParents(this.kid.parents[i].phoneNumber, personName);
    }
  }

  generateNumber(){
    return Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;
  }
 
  showLargeModal() {
    /*const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });*/

    let modal: NgbModalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    
        (<ModalComponent>modal.componentInstance).modalHeader = this.code;
    
        modal.result.then((result) => {
          console.log(result);
        }, (reason) => {
          console.log(reason);
        }); 
 
  }

}
