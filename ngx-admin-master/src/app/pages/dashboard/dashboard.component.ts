import { Component, OnInit } from '@angular/core';
import { MockData } from '../../model/MockData';
import {Group} from "../../model/Group";

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  groups: Array<string> = new MockData().GetGroupsMock();
  imageUrl: Array<string> = new MockData().GetGroupsImageUrls();
  groupsObject: Array<Group> = [];
  ngOnInit(): void {

    setTimeout(function(){
      $('.menu-title').first().click();
    },500);

    for (let i = 0 ; i < this.groups.length; i++) {
      this.groupsObject.push(new Group(this.groups[i], 'url(' + 'assets/images/' + this.imageUrl[i] + ')'))
    }

  }
}
