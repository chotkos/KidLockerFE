import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService, NbSearchService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html', 
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;
  userMenu = [{ title: 'Profil' }, { title: 'Wyloguj' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private router: Router,
              private searchService: NbSearchService
            ) {
              this.searchService.onSearchSubmit().subscribe(function(e){ 
                //this.router.navigate(['/pages/search'], { queryParams: { searchstring: e.term } });
                window.location.href = '/#/pages/kid/search/'+e.term;
              });
            
  }

  ngOnInit() {
    setTimeout(function(){
      $('.nb-search').css('color', '#3dcc6d').css('font-weight', 'bold')
    }, 500);
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    $('span.info').html('Wciśnij enter aby wyszukać')
    this.analyticsService.trackEvent('startSearch');
  }
 
}
