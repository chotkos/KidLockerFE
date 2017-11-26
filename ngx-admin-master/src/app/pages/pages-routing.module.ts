import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SmartTableComponent} from './tables/smart-table/smart-table.component';
import { TreeComponent } from 'ng2-tree/src/tree.component';
import { ComponentsComponent } from './components/components.component';
import { KidsListComponent } from './content/kids/kids-list/kids-list.component';
import { KidsViewComponent } from './content/kids/kids-view/kids-view.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  /*{ path: 'group', component: SmartTableComponent },*/
  { path: 'group/:name', component: KidsListComponent },
  { path: 'kid/search/:searchstring', component: KidsListComponent },
  { path: 'kid/:id', component: KidsViewComponent}
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
