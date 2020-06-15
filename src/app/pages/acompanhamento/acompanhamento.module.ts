import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcompanhamentoPageRoutingModule } from './acompanhamento-routing.module';

import { AcompanhamentoPage } from './acompanhamento.page';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcompanhamentoPageRoutingModule,
    SharedComponentsModule,
    HttpClientModule
  ],
  declarations: [AcompanhamentoPage]
})
export class AcompanhamentoPageModule {}
