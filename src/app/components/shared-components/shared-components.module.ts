import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableDetailsComponent } from '../expandable-details/expandable-details.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ExpandableDetailsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ExpandableDetailsComponent]
})
export class SharedComponentsModule { }
