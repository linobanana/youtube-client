import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberConversionPipe'
})
export class NumberConversionPipe implements PipeTransform {

  public transform(value: number): string {
    if (value <= 999) {
      return `${value}`;
    } else if (value >= 1000 && value <= 999999) {
      return `${Math.round(value / 1000)}k`;
    } else if (value >= 1000000) {
      return `${Math.round(value / 1000000)}m`;
    }
  }

}
