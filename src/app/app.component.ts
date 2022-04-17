import { Component } from '@angular/core';
import { FormControlContactComponent } from './page/contact/form-control-contact/form-control-contact.component';
import { ContactService } from './page/contact/service/contact.service';
import { DialogService } from './service/dialog/dialog.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialogServ: DialogService, private contactServ: ContactService) { }

  ngOnInit(): void {
  }

  create(event: any) {
      this.dialogServ.onCreateDialog(FormControlContactComponent, '100', '60', true, null, false, true, '900px', 'right');
  }


  contact() {
    this.contactServ.loading = true;
    this.contactServ.Listcontact = this.contactServ.contacts;
    this.contactServ.loading = false;
  }

  goTO() {
    window.open( 'https://www.linkedin.com/in/santiago-encarnacion-smith-8260bb118/', '_blank');
  }

  Client() {

  }
}
