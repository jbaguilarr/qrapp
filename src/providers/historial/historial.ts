import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-data.model';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HistorialProvider {

  private _historial:ScanData[] = [];

  constructor(private iab: InAppBrowser) {
  }

  abrir_scan(index:number){
        let scanData = this._historial[index];
        console.log(scanData);
        switch(scanData.tipo){
            case "http":
                this.iab.create(scanData.info,"_system");
            break;

            default:
                console.log("Tipo no soportado");
        }
  }
  agregar_historial(texto:string){
      let data = new ScanData(texto);
      this._historial.unshift(data);
      console.log(this._historial);
      this.abrir_scan(0);
  }
   cargar_historial(){
       return this._historial;
   }
}
