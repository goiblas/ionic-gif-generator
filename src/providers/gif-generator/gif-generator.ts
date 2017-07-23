import { Injectable } from '@angular/core';
import { LoadingController } from "ionic-angular";

declare var GIFEncoder: any;
@Injectable()
export class GifGeneratorProvider {
encoder: any;
loading: any;
  constructor(public loadingCtrl: LoadingController) {
    this.encoder = new GIFEncoder();
  }
 public generateGifFormCanvas(canvas, time = 3000) {
    this.loading = this.loadingCtrl.create({
      content: `
      <div class="custom-spinner-container">
        Generando...
        <div class="custom-spinner-box"></div>
      </div>`,
    });
    this.loading.present();
      this.encoder.setRepeat(0);
      this.encoder.setDelay(250);
      this.encoder.setSize(300, 300);
      this.encoder.start();
      return new Promise( resolve => this.record(canvas, resolve, time));
  }

 private record(canvas, resolve, time: number = 0) {

    this.encoder.addFrame(canvas);
    if (time >= 0) {
       setTimeout( () => this.record( canvas, resolve, time -= 50), 50);
    }else {
        this.encoder.finish();
        this.generarGif(resolve);
    }
  }

  private generarGif(resolve) {
    const bin = new Uint8Array(this.encoder.stream().bin);
    const blob = new Blob([bin.buffer], { type: 'image/gif' });
    this.loading.dismiss();
    resolve (blob);
  }
}
