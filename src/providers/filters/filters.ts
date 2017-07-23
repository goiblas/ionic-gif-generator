import { Injectable } from '@angular/core';
import { clarendon } from './instafilters';

import 'rxjs/add/operator/map';

@Injectable()
export class FiltersProvider {

  constructor() {
   
  }

  normal(){

  }

  invert(canvas, size){
  let info = canvas.getImageData(0,0, size, size);
    let pos;

    for(let x = 0; x < size; x++){
      for(let y = 0; y < size; y++){
        pos = (info.width * 4 * y) + (x * 4);
        info.data[pos] = 255 - info.data[pos];
        info.data[pos+1] = 255 - info.data[pos + 1];
        info.data[pos+2]= 255 - info.data[pos +2];
      }
    }

    canvas.putImageData(info, 0, 0);
  }
clarendonEffect(canvas, size){
  let pixels = canvas.getImageData(0,0, size, size);
  canvas.putImageData(clarendon(pixels), 0, 0);

}

invert2(canvas, size){
    let pixels = canvas.getImageData(0,0, size, size);

     let d = pixels.data;
      for (let i = 0; i < d.length; i += 4) {
        d[i] = 255 - d[i];
        d[i + 1] = 255 - d[i + 1];
        d[i + 2] = 255 - d[i + 2];
      }

      canvas.putImageData(pixels, 0, 0);

}
  random(canvas, size){
  let info = canvas.getImageData(0,0, size, size);
    let pos;

    for(let x = 0; x < size; x++){
      for(let y = 0; y < size; y++){
        pos = (info.width * 4 * y) + (x * 4);
        info.data[pos] = Math.floor(Math.random() * (255 - 100) + 100) + info.data[pos];
        info.data[pos+1] = Math.floor(Math.random() * (255 - 25) + 25) + info.data[pos + 1];
        info.data[pos+2]= Math.floor(Math.random() * 255) + info.data[pos +2];
      }
    }
    canvas.putImageData(info, 0, 0);
  } 
}
