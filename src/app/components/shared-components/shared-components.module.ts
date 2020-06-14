import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableDetailsComponent } from '../expandable-details/expandable-details.component';
import { IonicModule } from '@ionic/angular';
import { ExpandableHealthComponent } from '../expandable-health/expandable-health.component';
import { ListCupomComponent } from '../list-cupom/list-cupom.component';



@NgModule({
  declarations: [ExpandableDetailsComponent, ExpandableHealthComponent, ListCupomComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ExpandableDetailsComponent, ExpandableHealthComponent, ListCupomComponent]
})
export class SharedComponentsModule { }
