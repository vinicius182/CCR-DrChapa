import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'saude',
    loadChildren: () => import('./pages/saude/saude.module').then( m => m.SaudePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'frete',
    loadChildren: () => import('./pages/frete/frete.module').then( m => m.FretePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'acompanhamento',
    loadChildren: () => import('./pages/acompanhamento/acompanhamento.module').then( m => m.AcompanhamentoPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
