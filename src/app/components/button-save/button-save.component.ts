import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-save',
  templateUrl: './button-save.component.html',
  styleUrls: ['./button-save.component.css']
})
export class ButtonSaveComponent implements OnInit {

  @Input() enable: boolean = false;
  @Input() name: string = '';
  @Input() class: string = 'btn btn-primary';

  @Output() saveEvent = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  save(event: any) {
    this.saveEvent.emit(event);
  }
}
