import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZaglavljeComponent } from './zaglavlje/zaglavlje.component';
import { SadrzajComponent } from './sadrzaj/sadrzaj.component';
import { SlikaComponent } from './zaglavlje/slika/slika.component';
import { NavbarComponent } from './zaglavlje/navbar/navbar.component';
import { OMeniComponent } from './sadrzaj/o-meni/o-meni.component';
import { StecenoZnanjeComponent } from './sadrzaj/steceno-znanje/steceno-znanje.component';
import { RadoviComponent } from './sadrzaj/radovi/radovi.component';
import { KontaktComponent } from './sadrzaj/kontakt/kontakt.component';
import { ImageSliderModule } from './sadrzaj/radovi/imageSlider/imageSlider.module';

@NgModule({
  declarations: [
    AppComponent,
    ZaglavljeComponent,
    SadrzajComponent,
    SlikaComponent,
    NavbarComponent,
    OMeniComponent,
    StecenoZnanjeComponent,
    RadoviComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
