import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router'; 


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
 

  constructor(private router: Router){
    this.initMenuItems();
  }


  initMenuItems(){ 
    var allmenu = {
        title: 'Grupy',
        icon: 'nb-keypad',
        link: '/pages/group',
        children: []
    }


        for(var i=0;i<this.md.groupsMock.length;i++){
    
          var newsection =  {
            title: this.md.groupsMock[i],
            link: '/pages/group/' + this.md.groupsMock[i],
            
          }
    
          allmenu.children.push(newsection);  
        }
 
        this.menu = [allmenu];
  }

}
