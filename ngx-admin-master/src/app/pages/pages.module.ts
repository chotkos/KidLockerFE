import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { TablesModule } from './tables/tables.module';
import { TreeModule } from 'ng2-tree/src/tree.module';
import { ComponentsModule } from './components/components.module';
import { KidsListComponent } from './content/kids/kids-list/kids-list.component';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    TablesModule,
    ComponentsModule
  ],
  declarations: [
    ...PAGES_COMPONENTS, 
  ],
})
export class PagesModule {
}
