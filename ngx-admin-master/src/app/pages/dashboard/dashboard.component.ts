import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {

    setTimeout(function(){
      $('.menu-title').first().click();
    },500);
  }


}
