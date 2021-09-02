import { Component, OnInit } from '@angular/core';
import { FruitsServiceService } from '../fruits-service.service';
import { Fruits } from '../interface/fruits';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  public fruits: Fruits[] = [];


  constructor(
    private readonly _fruitService: FruitsServiceService,
    private readonly _routerService: Router,

  ) { }

  ngOnInit(): void {
    this.fruits = this._fruitService.getAll();

  }

  removeFruit(fruitID: string): void {
    this._fruitService.remove(fruitID);

  }

  Back(): void {
    this._routerService.navigate(['/bio'])
  }
}