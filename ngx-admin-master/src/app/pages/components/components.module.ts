import { NgModule } from '@angular/core';

import { TreeModule } from 'ng2-tree';
import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { ComponentsRoutingModule, routedComponents } from './components-routing.module';
import { UiFeaturesModule } from './../ui-features/ui-features.module';

@NgModule({
  imports: [
    ThemeModule,
    ComponentsRoutingModule,
    TreeModule,
    ToasterModule,
    UiFeaturesModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ComponentsModule { }
