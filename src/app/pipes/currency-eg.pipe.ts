import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyEg'
})
export class CurrencyEgPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value +' EGP';
  }

}
