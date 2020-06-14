import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableDetailsComponent } from '../expandable-details/expandable-details.component';
import { IonicModule } from '@ionic/angular';
import { ExpandableHealthComponent } from '../expandable-health/expandable-health.component';



@NgModule({
  declarations: [ExpandableDetailsComponent, ExpandableHealthComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ExpandableDetailsComponent, ExpandableHealthComponent]
})
export class SharedComponentsModule { }
