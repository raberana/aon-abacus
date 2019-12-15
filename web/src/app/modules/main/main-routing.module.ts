import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule), 
    data: { animation: 'PageHome' }
  },
  {
    path: 'workspace',
    loadChildren: () => import('./modules/workspace/workspace.module').then(mod => mod.WorkspaceModule), 
    data: { animation: 'PageWorkspace' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
