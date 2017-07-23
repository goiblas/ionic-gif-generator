import { Injectable } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

declare var MediaRecorder: any;
@Injectable()
export class GetVideoToDesktopProvider {
optionsCapture = {
  audio: false,
  video: { width: 300, height: 300 }
}
stream;
recordedBlobs = [];
mediaRecorder;

  constructor( private sanitizer: DomSanitizer ) { }

public recVideoDesktop(){

  return new Promise( (resolve, reject) => {
    navigator.mediaDevices.getUserMedia(this.optionsCapture)
    .then( stream => {
    
    this.stream = stream;
    const url = URL.createObjectURL(stream);
    const saveUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
    resolve(saveUrl);
  
  })
  .catch ( err => reject(err));
  })
}

public stopScreamCapture(){
  this.stream.getVideoTracks()[0].stop();
}

public startRecording() {
  let options = {
    mimeType: 'video/webm',
    bitsPerSecond: 500000
  };

  try {
    this.mediaRecorder = new MediaRecorder(this.stream, options);
  } catch (e0) {
    console.log('Unable to create MediaRecorder with options Object: ', e0);
    try {
      options = {mimeType: 'video/webm,codecs=vp9', bitsPerSecond: 100000};
      this.mediaRecorder = new MediaRecorder(this.stream, options);
    } catch (e1) {
      console.log('Unable to create MediaRecorder with options Object: ', e1);
      try {
        this.mediaRecorder = new MediaRecorder(this.stream, 'video/vp8');
      } catch (e2) {
        alert('MediaRecorder is not supported by this browser.\n\n' +
            'Try Firefox 29 or later, or Chrome 47 or later, with Enable experimental Web Platform features enabled from chrome://flags.');
        console.error('Exception while creating MediaRecorder:', e2);
        return;
      }
    }
  }

  this.mediaRecorder.addEventListener('dataavailable', (e) => this.handlerAvailable(e))
  this.mediaRecorder.start(10); // collect 10ms of data

  return new Promise((resolve) => {
      setTimeout( () => {
        this.mediaRecorder.stop();
        this.getVideoResult()
          .then( url => resolve(url))
      }, 3000);
  })
}

  private handlerAvailable(event){
      if (event.data && event.data.size > 0) {
        this.recordedBlobs.push(event.data);
      }
  }

  private getVideoResult(){

    return new Promise( (resolve, reject) => {

      const blob = new Blob(this.recordedBlobs, {type: 'video/webm'});
      const url = URL.createObjectURL(blob);
      const saveUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
      resolve(saveUrl);

    });

  }

}
