import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'saude',
    loadChildren: () => import('./pages/saude/saude.module').then( m => m.SaudePageModule)
  },
  {
    path: 'frete',
    loadChildren: () => import('./pages/frete/frete.module').then( m => m.FretePageModule)
  },
  {
    path: 'acompanhamento',
    loadChildren: () => import('./pages/acompanhamento/acompanhamento.module').then( m => m.AcompanhamentoPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/viagem/viagem.module').then( m => m.ViagemPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
