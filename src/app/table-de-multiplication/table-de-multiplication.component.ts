import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-de-multiplication',
  templateUrl: './table-de-multiplication.component.html',
  styleUrls: ['./table-de-multiplication.component.scss']
})
export class TableDeMultiplicationComponent implements OnInit {
@Input('nombre') nombre!: number;
keys: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit(): void {
    console.log('TEST', this.nombre);

  }

}
