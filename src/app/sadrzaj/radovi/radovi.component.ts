import { Component } from '@angular/core';
import { SlideInterface } from './imageSlider/types/slide.interface';

@Component({
  selector: 'app-radovi',
  templateUrl: './radovi.component.html',
  styleUrls: ['./radovi.component.css']
})
export class RadoviComponent {
  slides : SlideInterface[] = [
    {url: '/assets/Slika_16.png',title:'slika_16'},
    {url: '/assets/Slika_17.png',title:'slika_17'},
    {url: '/assets/kugla.png',title:'slika_14'},
    {url: '/assets/Slika_5.png',title:'slika_5'}
  ];
}
