import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';

import { HomePage , MapaPage , TabsPage,GuardadosPage } from '../pages/index.paginas';

//mapas
import { AgmCoreModule } from '@agm/core';

// plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//provider
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
    FormsModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLXebhVQKxxvGW4ShKeRWCmHKL-ZX16bU'
    })
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
    InAppBrowser,
    AgmCoreModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialProvider
  ]
})
export class AppModule {}
