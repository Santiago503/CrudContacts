import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/material/material.module';

const components = [HeaderComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [components]
})
export class ComponentsModule { }
