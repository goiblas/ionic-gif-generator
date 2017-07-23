import { Component, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { BuilderPage } from './../builder/builder';

import { GetVideoToMobileProvider } from './../../providers/getvideo/get-video-to-mobile';
import { GetVideoToDesktopProvider } from './../../providers/getvideo/get-video-to-desktop';

@Component({
  selector: 'page-screen-capturer',
  templateUrl: 'screen-capturer.html',
})
export class ScreenCapturerPage {

webcam: any;
webcamUrl: any = '';

  constructor(
      public navCtrl: NavController,
      private element: ElementRef,
      private platform: Platform,
      private getVideoToMobile: GetVideoToMobileProvider,
      private getVideoToDesktop: GetVideoToDesktopProvider ) {
  }

  ionViewDidLoad() {
    this.webcam = this.element.nativeElement.querySelector('#videoWebCam');
  }


  getVideo() {
    if(this.platform.is('cordova')){

      this.getVideoToMobile.recVideoMobile()
      .then( urlvideo => {
            this.navCtrl.push(BuilderPage,{ video: urlvideo });
      })
      .catch( err => console.log(err));

    }else {
      this.getVideoToDesktop.recVideoDesktop()
      .then( url => {
        this.drawVideo(url);
      })
      .catch ( err => console.log(err))
    }
  }

  recVideo(){
    this.getVideoToDesktop.startRecording()
    .then( urlVideo => {

      this.getVideoToDesktop.stopScreamCapture();
      this.webcamUrl = '';
      this.navCtrl.push(BuilderPage,{ video: urlVideo });
      
    })
  }

  drawVideo(url){
      this.webcamUrl = url;
      this.webcam.autoplay = true;
      this.webcam.muted = true;
  }
}
