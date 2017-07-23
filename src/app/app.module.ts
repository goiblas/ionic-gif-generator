import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { ScreenCapturerPage } from '../pages/screen-capturer/screen-capturer';
import { SharePage } from '../pages/share/share';
import { BuilderPage } from '../pages/builder/builder';
import { FormaterTimerPipe } from '../pipes/formater-timer/formater-timer';
import { FiltersProvider } from '../providers/filters/filters';
import { SocialSharing } from "@ionic-native/social-sharing";
import { MediaCapture } from "@ionic-native/media-capture";
import { StorageProvider } from '../providers/storage/storage';
import { SecureStorage } from "@ionic-native/secure-storage";
import { GetVideoToMobileProvider } from '../providers/getvideo/get-video-to-mobile';
import { GetVideoToDesktopProvider } from '../providers/getvideo/get-video-to-desktop';
import { GifGeneratorProvider } from '../providers/gif-generator/gif-generator';

@NgModule({
  declarations: [
    MyApp,
    ScreenCapturerPage,
    FormaterTimerPipe,
    SharePage,
    BuilderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScreenCapturerPage,
    SharePage,
    BuilderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    MediaCapture,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FiltersProvider,
    StorageProvider,
    SecureStorage,
    GetVideoToMobileProvider,
    GetVideoToDesktopProvider,
    GifGeneratorProvider,
    FileTransfer,
    File
  ]
})
export class AppModule {}
