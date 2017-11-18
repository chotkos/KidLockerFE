import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { GroupsComponent } from './groups.component';


@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
  ],
  declarations: [
    GroupsComponent,
  ],
})
export class GroupsModule { }
