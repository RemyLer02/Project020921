import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LegumesServiceService } from 'src/app/legumes-service.service';

@Component({
  selector: 'app-edit-legumes',
  templateUrl: './edit-legumes.component.html',
  styleUrls: ['./edit-legumes.component.scss']
})
export class EditLegumesComponent implements OnInit {
  legumesForm!: FormGroup;


  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _serviceFruit: LegumesServiceService,
    private readonly _routerService: Router,) { }

  ngOnInit(): void {
    this.legumesForm = this._formBuilder.group({
      id: [null],
      Origine: [null,[Validators.required]],
      Description: [null,[Validators.required]],
      poids: [null,[Validators.required]],
      uniteMesure: [null,[Validators.required]],
    })
  }

  get l(){
    return this.legumesForm.controls;
  }

  save(){
    const valid = this.legumesForm.valid;
    if(valid){
      const data = this.legumesForm.getRawValue();
      this._serviceFruit.add(data);
      this._routerService.navigateByUrl("/legumes");

    }
  }

  Cancel(): void {
    this._routerService.navigate(['/legumes'])
  }

}
