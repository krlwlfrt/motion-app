import {HttpClientModule} from '@angular/common/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {EventPage} from '../pages/event/event';
import {EventsPage} from '../pages/events/events';
import {HomePage} from '../pages/home/home';
import {SettingsPage} from '../pages/settings/settings';
import {MyApp} from './app.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventPage,
    EventsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    HomePage,
    EventPage,
    EventsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
