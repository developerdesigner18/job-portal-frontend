import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';


const routes: Routes = [

  {
    path: 'header',
    component:HeaderComponent
  },
  {
    path: 'footer',
    component:FooterComponent
  },

  {
    path: '',
    loadChildren: () => import('./components/components-routing.module').then(m => m.ComponentsRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
