import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OMeniComponent } from './sadrzaj/o-meni/o-meni.component';
import { StecenoZnanjeComponent } from './sadrzaj/steceno-znanje/steceno-znanje.component';
import { RadoviComponent } from './sadrzaj/radovi/radovi.component';
import { KontaktComponent } from './sadrzaj/kontakt/kontakt.component';

const routes: Routes = [
  {path: 'o_meni', component: OMeniComponent},
  {path: 'steceno_znanje', component: StecenoZnanjeComponent},
  {path: 'radovi', component: RadoviComponent},
  {path: 'kontakt', component: KontaktComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
