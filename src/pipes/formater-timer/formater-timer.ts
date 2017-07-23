import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FormaterTimerPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'formatertimer',
})
export class FormaterTimerPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args) {
    if (isNaN(value)) {
      return value;
    }

    const cifra = value.toString();
    if ( value < 10) {
      return '00:0' + cifra;
    } else if (value < 100) {
      return '00:' + cifra;
    } else {
      return '0' + cifra.charAt(0) + ':' + cifra.substr(1);
    }
  }
}
