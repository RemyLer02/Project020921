import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { TableDeMultiplicationComponent } from './table-de-multiplication/table-de-multiplication.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { FruitsComponent } from './fruits/fruits.component';
import { LegumesComponent } from './legumes/legumes.component';
import { BioComponent } from './bio/bio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {ColorPickerModule} from 'primeng/colorpicker';
import {TableModule} from 'primeng/table';
import { EditFruitsComponent } from './fruits/edit-fruits/edit-fruits.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { EditLegumesComponent } from './legumes/edit-legumes/edit-legumes.component';
import { HeaderComponent } from './header/header.component';
import { PipePipe } from './pipe.pipe';
/*import { ExportComponentComponent } from './export-component/export-component.component';*/






@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    TableDeMultiplicationComponent,
    AdminComponent,
    ContactComponent,
    FruitsComponent,
    LegumesComponent,
    BioComponent,
    EditFruitsComponent,
    EditLegumesComponent,
    HeaderComponent,
    PipePipe,
   /* ExportComponentComponent,*/
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ColorPickerModule,
    TableModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
