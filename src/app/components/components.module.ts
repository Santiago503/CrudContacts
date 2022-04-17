import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/material/material.module';
import { AddButtonComponent } from './add-button/add-button.component';
import { ButtonSaveComponent } from './button-save/button-save.component';
import { ControlInputGenericComponent } from './control-input-generic/control-input-generic.component';
import { TableMaterialComponent } from './table-material/table-material.component';
import { TitleComponent } from './title/title.component';
import { ReactiveFormsModule } from '@angular/forms';


const components = [HeaderComponent, AddButtonComponent,
  TitleComponent, ControlInputGenericComponent, ButtonSaveComponent, TableMaterialComponent];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [components]
})
export class ComponentsModule { }
