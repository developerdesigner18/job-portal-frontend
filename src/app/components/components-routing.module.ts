import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./home/main.module').then(m => m.MainModule),
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule),
  },
  {
    path: 'stad',
    loadChildren: () => import('./stad/stad.module').then(m => m.StadModule),
  },
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ComponentsRoutingModule { }
