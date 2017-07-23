import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";

/**
 * Generated class for the SharePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  src: any;
  blob: any;
  gif: any;
  frames: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
      this.blob = this.navParams.get('blob');
      this.frames = this.navParams.get('frames');
      console.log(this.frames);

  }

  ionViewDidLoad() {

       const url = URL.createObjectURL(this.blob);
       this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
       this.gif = document.getElementById('gif');
    // const image = document.getElementById('image');
    // this.image.src = url;
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.gif.onload = function () {
        // Don't forget to revoke object url after load
        URL.revokeObjectURL(url);

    }.bind(this);
    
  }

}
