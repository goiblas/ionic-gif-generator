import { Injectable } from '@angular/core';
import { CaptureVideoOptions, CaptureError, MediaCapture, MediaFile } from "@ionic-native/media-capture";

@Injectable()
export class GetVideoToMobileProvider {
public videoheight;
public videowidth;

  constructor(
      private mediaCapture: MediaCapture
  ) {
  }

public recVideoMobile() {
   const captureOptions:CaptureVideoOptions = {
      limit: 1,
      duration:3,
      quality: 40
    }

  return new Promise((resolve, reject) => {
    
    this.mediaCapture.captureVideo(captureOptions)
      .then( (data: MediaFile[]) => {
        resolve(data[0].fullPath)

        data[0].getFormatData( dt => {
           this.videoheight = dt.height * 300 / dt.width;
           this.videowidth =  300;
         })

      }).catch((err:CaptureError) => reject(err));
  })
  }
}
