import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberConversionPipe'
})
export class NumberConversionPipe implements PipeTransform {

  public transform(value: string): string {
    let num: number = Number(value);
    if (num <= 999) {
      return `${num}`;
    } else if (num >= 1000 && num <= 999999) {
      return `${Math.round(num / 1000)}k`;
    } else if (num >= 1000000) {
      return `${Math.round(num / 1000000)}m`;
    }
  }

}
