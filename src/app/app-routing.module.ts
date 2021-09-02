import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AdminComponent } from './admin/admin.component';
//import { ContactComponent } from './contact/contact.component';
import {LegumesComponent } from './legumes/legumes.component';
import {FruitsComponent } from './fruits/fruits.component';
import {BioComponent } from './bio/bio.component';
import { EditFruitsComponent } from './fruits/edit-fruits/edit-fruits.component';
import { EditLegumesComponent } from './legumes/edit-legumes/edit-legumes.component';
/*import { ExportComponentComponent } from './export-component/export-component.component';*/


const routes: Routes = [
  {path: 'fruits', component: FruitsComponent },
  {path: 'legumes', component: LegumesComponent },
  {path: 'fruits/add', component: EditFruitsComponent },
  {path: 'fruits/edit/:id', component: EditFruitsComponent },
  {path: 'legumes/add', component: EditLegumesComponent },
  {path: 'legumes/edit/:id', component: EditLegumesComponent },
 /* {path: 'export', component: ExportComponentComponent },*/


 // {path: 'legumes-add', component: EditLegumesComponent },
  // {path: 'legumes-edit/:idLegume', component: EditLegumesComponent },
  {path: 'bio', component: BioComponent },
  {path: '', component: BioComponent },
 // {path: 'contact/:contactId', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
