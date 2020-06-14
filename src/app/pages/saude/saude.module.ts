import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudePageRoutingModule } from './saude-routing.module';

import { SaudePage } from './saude.page';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudePageRoutingModule,
    SharedComponentsModule,
    HttpClientModule
  ],
  declarations: [SaudePage]
})
export class SaudePageModule {}
