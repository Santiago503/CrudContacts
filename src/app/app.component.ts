import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControlContactComponent } from './page/contact/form-control-contact/form-control-contact.component';
import { ContactI } from './page/contact/model/contactInterface';
import { ContactService } from './page/contact/service/contact.service';
import { DialogService } from './service/dialog/dialog.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialogServ: DialogService, private contactServ: ContactService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getListContact();
  }

  create(event: any) {
  let dg = this.dialogServ.onCreateDialog(FormControlContactComponent, '100', '60', true, null, false, true, '900px', 'right');

    dg.afterClosed().subscribe((resp) => {
      this.getListContact();
    });
  }

  getListContact() {
    this.contactServ.loading = true;
    //localStorage
    if(this.contactServ.Contacts.length > 0) {
      this.contactServ.ListContact = this.contactServ.Contacts;
      this.contactServ.loading = false;
      this.contactServ.dataInitial = false;
      return;
    }
    //or data initial
    this.getDataContactArchivJson();
  }

  goTO() {
    window.open( 'https://www.linkedin.com/in/santiago-encarnacion-smith-8260bb118/', '_blank');
  }

  // data archiv json
  getDataContactArchivJson() {
    return this.http
    .get("../assets/data/data.json")
    .subscribe(
      (resp: ContactI[] | any) => {
        this.contactServ.loading = false;
        this.contactServ.dataInitial = true;
        this.contactServ.ListContact = resp;
      },
      error => {
        this.contactServ.loading = false;
      })
  }
}
