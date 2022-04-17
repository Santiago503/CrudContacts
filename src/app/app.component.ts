import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudContacts';


  goTO() {
    window.open( 'https://www.linkedin.com/in/santiago-encarnacion-smith-8260bb118/', '_blank');
  }
}
