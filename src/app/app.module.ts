import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { ComponentsModule } from './components/components.module';
import { ContactComponent } from './page/contact/contact.component';
import { FormControlContactComponent } from './page/contact/form-control-contact/form-control-contact.component';
import { IndexContactComponent } from './page/index-contact/index-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FormControlContactComponent,
    IndexContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
