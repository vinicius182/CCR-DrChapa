import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoUteisPage } from './info-uteis.page';

const routes: Routes = [
  {
    path: '',
    component: InfoUteisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoUteisPageRoutingModule {}
