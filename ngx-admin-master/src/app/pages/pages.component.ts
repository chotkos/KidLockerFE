import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { MockData } from './../model/MockData';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})

export class PagesComponent {

  md:MockData = new MockData();
  //menu = MENU_ITEMS;
  menu:any = [];
  constructor(){
    this.initMenuItems();
  }

  initMenuItems(){
    var elements = [];
    
        for(var i=0;i<this.md.groupsMock.length;i++){
    
          var newsection =  {
            title: this.md.groupsMock[i],
            icon: 'nb-keypad',
            link: '/groups?name='+ this.md.groupsMock[i]
          }
    
          elements.push(newsection);  
        }
        this.menu = elements;
  }

}
