import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoUteisPageRoutingModule } from './info-uteis-routing.module';

import { InfoUteisPage } from './info-uteis.page';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoUteisPageRoutingModule,
    HttpClientModule,
    SharedComponentsModule
  ],
  declarations: [InfoUteisPage]
})
export class InfoUteisPageModule {}
