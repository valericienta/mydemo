import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stocklevel'
})
export class StocklevelPipe implements PipeTransform {

  transform(valor: number): string {
   if (valor <=0 ) return 'Danger'; else return 'OK';
  }

}
