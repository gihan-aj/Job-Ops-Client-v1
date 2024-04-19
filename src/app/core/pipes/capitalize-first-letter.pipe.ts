import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter',
  standalone: true,
})
export class CapitalizeFirstLetterPipe implements PipeTransform {
  transform(value: string): string {
    let fixedString = value.charAt(0).toUpperCase();

    for (let i = 1; i < value.length; i++) {
      if (value[i] === value[i].toUpperCase()) {
        fixedString += ' ';
      }
      fixedString += value[i];
    }

    return fixedString;
  }
}
