import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Legumes } from '../interface/legumes';
import { LegumesServiceService } from '../legumes-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legumes',
  templateUrl: './legumes.component.html',
  styleUrls: ['./legumes.component.scss']
})
export class LegumesComponent implements OnInit {
  public legumes: Legumes[] = [];

  constructor(
    private readonly _legumeService: LegumesServiceService,
    private readonly _routerService: Router,
  ) { }

  ngOnInit(): void {
    this.legumes = this._legumeService.getAll();
  }


  removeLegume(legumeID: string): void{
    this._legumeService.remove(legumeID);
  }

  Back(): void {
    this._routerService.navigate(['/bio'])
  }
}
