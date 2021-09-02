import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FruitsServiceService } from 'src/app/fruits-service.service';

@Component({
  selector: 'app-edit-fruits',
  templateUrl: './edit-fruits.component.html',
  styleUrls: ['./edit-fruits.component.scss']
})
export class EditFruitsComponent implements OnInit {
  fruitsForm!: FormGroup;


  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _serviceFruit: FruitsServiceService,
    private readonly _routerService: Router,

  ) { }

  ngOnInit(): void {
    this.fruitsForm = this._formBuilder.group({
      id: [null],
      Origine: [null,[Validators.required]],
      Description: [null,[Validators.required]],
      poids: [null,[Validators.required]],
      uniteMesure: [null,[Validators.required]],
    })
  }

  get f(){
    return this.fruitsForm.controls;
  }

  save(){
    const valid = this.fruitsForm.valid;
    if(valid){
      const data = this.fruitsForm.getRawValue();
      this._serviceFruit.add(data);
      this._routerService.navigateByUrl("/fruits");
    }
  }

  Cancel(): void {
    this._routerService.navigate(['/fruits'])
  }


}
