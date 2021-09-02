import { Injectable } from '@angular/core';
import { Fruits } from './interface/fruits';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class FruitsServiceService {

  private _fruits: Fruits[] = [
    { id: uuidv4(), Origine: 'Espagne', Description: 'Oranges à Jus Bio', poids: 150, uniteMesure: 'grammes' },
    { id: uuidv4(), Origine: 'Equateur', Description: 'Bananes Bio', poids: 80, uniteMesure: 'grammes' },
    { id: uuidv4(), Origine: 'France', Description: 'Kiwi Bio', poids: 50, uniteMesure: 'grammes' }

  ];
  constructor() { }

  // récupérer tous les fruits
  getAll(): Fruits[] {
    return this._fruits;
  }

  // récupérer un fruit
  get(fruitsId: string): Fruits | null {
    return this._fruits.find(l => l.id === fruitsId) || null;
  }

  // supprimer un fruit
  remove(fruitsId: string) {
    const index = this._fruits.findIndex(l => l.id === fruitsId);
    if (index !== -1) {
      this._fruits.splice(index, 1);
    }
  }

  //modifier un fruit
  update(fruit: Fruits) {
    const index = this._fruits.findIndex(l => l.id === fruit.id);
    if (index !== -1) {
      this._fruits[index] = fruit;
    }
  }

  add(fruit: Fruits){
    fruit.id = uuidv4();
    this._fruits.push(fruit);
  }
}
