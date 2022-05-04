import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.homeModule),
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
    path: 'contact',
    loadChildren: () => import('./contactus/contactus.module').then(m => m.contactusModule),
  },
  {
    path: 'about-us',
    loadChildren: () => import('./aboutus/aboutus.module').then(m => m.aboutusModule),
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
  {
    path: 'agb',
    loadChildren: () => import('./agb/agb.module').then(m => m.AgbModule),
  },
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})



export class ComponentsRoutingModule { }
