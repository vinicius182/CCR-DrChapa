import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableDetailsComponent } from '../expandable-details/expandable-details.component';
import { IonicModule } from '@ionic/angular';
import { ExpandableHealthComponent } from '../expandable-health/expandable-health.component';
import { ListCupomComponent } from '../list-cupom/list-cupom.component';
import { NavTabsComponent } from '../nav-tabs/nav-tabs.component';



@NgModule({
  declarations: [ExpandableDetailsComponent, ExpandableHealthComponent, ListCupomComponent, NavTabsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ExpandableDetailsComponent, ExpandableHealthComponent, ListCupomComponent, NavTabsComponent]
})
export class SharedComponentsModule { }
