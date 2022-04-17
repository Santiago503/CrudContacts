import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  goTO() {
    window.open( 'https://www.linkedin.com/in/santiago-encarnacion-smith-8260bb118/', '_blank');
  }
}
