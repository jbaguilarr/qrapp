import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  lat: number;
  lng: number;
  constructor( public navParams: NavParams) {
    this.lat=-17.780606;
    this.lng=-63.1763473;
  }


}
