import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'viagem',
                loadChildren: () => import('../viagem/viagem.module').then(m => m.ViagemPageModule)
            },
            {
                path: 'saude',
                loadChildren: () => import('../saude/saude.module').then(m => m.SaudePageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/viagem',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TabsPageRoutingModule {}