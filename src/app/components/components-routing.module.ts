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
    path: 'stadt',
    loadChildren: () => import('./stadt/stadt.module').then(m => m.StadtModule),
  },
  {
    path: 'sport',
    loadChildren: () => import('./sport/sport.module').then(m => m.SportModule),
  },
  {
    path: 'kontakt',
    loadChildren: () => import('./kontakt/kontakt.module').then(m => m.KontaktModule),
  },
  {
    path: 'ubreuns',
    loadChildren: () => import('./ubreuns/ubreuns.module').then(m => m.UbreunsModule),
  },
  {
    path: 'vision',
    loadChildren: () => import('./vision/vision.module').then(m => m.VisionModule),
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyModule),
  },
  {
    path: 'imprint',
    loadChildren: () => import('./imprint/imprint.module').then(m => m.ImprintModule),
  },
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ComponentsRoutingModule { }
