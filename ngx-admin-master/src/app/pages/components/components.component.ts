import { Component, OnInit } from '@angular/core';
import { MockData } from '../../model/MockData'; 
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'ngx-components',
  templateUrl: "./components.component.html",
  styleUrls: ["./components.component.css"]
})

export class ComponentsComponent implements OnInit {

  mock = new MockData();
  kid = null;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => { 
      this.kid = this.mock.kidsMock.filter(kid => kid.id + '' === params['id'])[0];

      this.kid.photoUrl = 'url(' + 'assets/images/' + this.kid.photoUrl + ')';


      console.log(this.kid);
    });
  }

}
