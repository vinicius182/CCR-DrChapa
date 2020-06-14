import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuponsPageRoutingModule } from './cupons-routing.module';

import { CuponsPage } from './cupons.page';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuponsPageRoutingModule,
    SharedComponentsModule,
    HttpClientModule
  ],
  declarations: [CuponsPage]
})
export class CuponsPageModule {}
