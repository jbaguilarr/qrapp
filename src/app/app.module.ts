import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage , MapaPage , TabsPage,GuardadosPage } from '../pages/index.paginas';

// plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HistorialProvider } from '../providers/historial/historial';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaPage,
    TabsPage,
    GuardadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaPage,
    TabsPage,
    GuardadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialProvider
  ]
})
export class AppModule {}
