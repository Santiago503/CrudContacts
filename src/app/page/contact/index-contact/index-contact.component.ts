import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertService } from 'src/app/service/alert/alert.service';
import { DialogService } from 'src/app/service/dialog/dialog.service';
import { FormControlContactComponent } from '../form-control-contact/form-control-contact.component';
import { ContactI } from '../model/contactInterface';
import { ContactService } from '../service/contact.service';
@Component({
  selector: 'app-index-contact',
  templateUrl: './index-contact.component.html',
  styleUrls: ['./index-contact.component.css']
})
export class IndexContactComponent implements OnInit {
  column = ['nro.', 'id', 'name', 'lastname', 'cellphone','status','acciones'];
  @Output() getContact = new EventEmitter<boolean>();
  constructor( public contactServ: ContactService, private dialogServ: DialogService, private alert: AlertService) {
  }

  ngOnInit(): void {
    this.getListContact();
  }

  getListContact() {
    this.getContact.emit(true);
  }

  onDelete(data: ContactI) {
      this.contactServ.deleteContactLocalStorage(data);
      this.getListContact();
  }

  onUpdate(data: any) {
    let dg = this.dialogServ.onCreateDialog(FormControlContactComponent, '100', '60', data.canEditOrSee, data, false, true, '900px', 'right');

    dg.afterClosed().subscribe((resp) => {
       this.getListContact();
    });
  }

}
