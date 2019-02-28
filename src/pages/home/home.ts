import { Component } from '@angular/core';

//compònentes
import { ToastController, Platform } from 'ionic-angular';

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HistorialProvider } from '../../providers/historial/historial';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private platform:Platform,
              private _historialProvider:HistorialProvider) {

  }
  scan(){
    console.log("Realizando scan....");

     if(!this.platform.is('cordova')){
      //this._historialProvider.agregar_historial("http://google.com");
      //this._historialProvider.agregar_historial("geo:-17.780606,-63.1763473");
      this._historialProvider.agregar_historial( `BEGIN:VCARD
VERSION:2.1
N:Kent;Clark
FN:Clark Kent
ORG:
TEL;HOME;VOICE:12345
TEL;TYPE=cell:67890
ADR;TYPE=work:;;;
EMAIL:clark@superman.com
END:VCARD` );
      return;
     }
    this.barcodeScanner.scan().then(barcodeData => {
      //console.log('Data del scan', barcodeData);
      console.log("result:",barcodeData.text);
      console.log("format:",barcodeData.format);
      console.log("cancelled:",barcodeData.cancelled);

      if(!barcodeData.cancelled  && barcodeData.text != null){
        this._historialProvider.agregar_historial(barcodeData.text);
      }
     }).catch(err => {
         console.log('Error', err);
         this.mostrar_error("Error: " + err);
     });
  }

  mostrar_error(mensaje:string){
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500
    });
    toast.present();
  }
}
