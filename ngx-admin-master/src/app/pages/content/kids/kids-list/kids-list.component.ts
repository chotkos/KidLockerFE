import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { SmartTableService } from '../../../../@core/data/smart-table.service';
import * as $ from 'jquery';
import { MockData } from '../../../../model/MockData';

@Component({
  selector: 'kids-list',
  templateUrl: './kids-list.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class KidsListComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: { 
      name: {
        title: 'Imię',
        type: 'string',
      },
      lastname: {
        title: 'Nazwisko',
        type: 'string',
      },
      groupName: {
        title: 'Grupa',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  groupName: string = "";
  searchstring: string="";
  mock = new MockData();

  constructor(
    private service: SmartTableService,
    private activatedRoute: ActivatedRoute,
    private router: Router) 
    {
      const data = this.service.getData();
      
      //this.source.load(data);      
      this.source.load(this.mock.kidsMock);
      
    }
  
  ngOnInit() {

    

      this.activatedRoute.params.subscribe((params: Params) => {
          this.groupName =  decodeURI(params['name']);
          this.searchstring =  decodeURI(params['searchstring']);
          if(this.groupName && this.groupName!="undefined"){
            this.source.load(this.mock.kidsMock.filter(kid=>kid.groupName.toLowerCase() === this.groupName.toLowerCase()));
          }else if(this.searchstring && this.searchstring!="undefined"){
            this.source.load(this.mock.kidsMock.filter(kid=>(kid.name+' '+kid.lastname+' '+kid.name).toLowerCase().indexOf(this.searchstring.toLowerCase())>-1));
            this.groupName = "Wyniki wyszukiwania dla frazy: '"+this.searchstring+"'";
          }
          $('div.ng2-smart-title').first().html('Akcje');

        });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Czy jesteś pewny że chcesz usunąć ten rekord?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onRowSelect(event): void {
    window.location.href = '/#/pages/kid/' + event.data.id;
  }
}
