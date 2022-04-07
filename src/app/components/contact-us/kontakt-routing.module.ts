import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponnet } from './kontakt.component';

const routes: Routes = [
  { path: '', component: ContactusComponnet},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KontaktRoutingModule { }
