import { Injectable } from '@angular/core';
import { Legumes } from './interface/legumes';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class LegumesServiceService {

  private _legumes: Legumes[] = [
    { id: uuidv4(), Origine: 'France', Description: 'Concombre Bio', poids: 100, uniteMesure: 'grammes' },
    { id: uuidv4(), Origine: 'Belgique', Description: 'Aubergine Bio', poids: 80, uniteMesure: 'grammes' },
    { id: uuidv4(), Origine: 'Mexique', Description: 'Avocat Bio', poids: 50, uniteMesure: 'grammes' }

  ];

  constructor() { }

  // récupérer tous les légumes
  getAll(): Legumes[] {
    return this._legumes;
  }

  // récupérer un légume
  get(legumesId: string): Legumes | null {
    return this._legumes.find(l => l.id === legumesId) || null;
  }

  // supprimer un légume
  remove(legumesId: string) {
    const index = this._legumes.findIndex(l => l.id === legumesId);
    if (index !== -1) {
      this._legumes.splice(index, 1);
    }
  }

  //modifier un légume
  update(legume: Legumes) {
    const index = this._legumes.findIndex(l => l.id === legume.id);
    if (index !== -1) {
      this._legumes[index] = legume;
    }
  }

  add(legume: Legumes){
    legume.id = uuidv4();
    this._legumes.push(legume);
  }
}