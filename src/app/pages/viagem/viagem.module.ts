import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViagemPageRoutingModule } from './viagem-routing.module';

import { ViagemPage } from './viagem.page';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';

import { InfoUteisPage } from '../../modals/info-uteis/info-uteis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViagemPageRoutingModule,
    HttpClientModule,
    SharedComponentsModule
  ],
  declarations: [ViagemPage, InfoUteisPage],
  entryComponents: [InfoUteisPage]
})
export class ViagemPageModule {}
