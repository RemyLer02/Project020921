import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(arg: any, Origine: string, Description: string, Poids: string, Unite: string): string {
    let PipeFruits = Origine.substr(0, 2) + Description.substr(0, 2) + Poids.substr(0, 2) + Unite.substr(0,2);
    return PipeFruits.toLowerCase();
  }

}
