import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule),
        data: { animation: 'PageHome' }
      },
      {
        path: 'pricing/new',
        loadChildren: () => import('./modules/workspace/workspace.module').then(mod => mod.WorkspaceModule),
        data: { animation: 'PagePricing' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
