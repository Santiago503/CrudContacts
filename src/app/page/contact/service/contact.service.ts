import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { EmailValidator, NameValidator } from 'src/app/helper/validate';
import { LocalstorageService } from 'src/app/service/localstorage/localstorage.service';
import { uid } from 'uid';
import { ContactCellPhonesI, ContactI } from '../model/contactInterface';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public keyContact = "DataContact";
  public ListContact = [];
  public loading = false;
  FormBuilder: any;
  Listcontact: any;
  contacts: any;

  constructor( private fb: FormBuilder,
               private localStorageServ: LocalstorageService) { }


  //#region FORMCONTROL
  createFormBuilder() {
    this.FormBuilder = this.fb.group({
      id                  :[0]
      ,name               :['', [Validators.required, Validators.maxLength(50), NameValidator]]
      ,lastname           :['', [Validators.required, Validators.maxLength(50), NameValidator]]
      ,gender             :['', Validators.required]
      ,email              :['', [Validators.required, EmailValidator]]
      ,status             :['A',  Validators.required]
      ,address          :['']
      ,ContactCellPhones            :this.fb.array([this.createFormArray()])
    });
  }

  get getCell() {
    return this.FormBuilder.get("ContactCellPhones") as FormArray;
  }

  get Contacts() {
    return this.localStorageServ.getItem(this.keyContact);
  }

  createFormArray() {
    return this.fb.group({
       cellphoneId          :[0]
      ,cellphone            :['',  Validators.required]
    });
  }
  //#endregion

  //#region LOCALSTORAGE
  saveContactLocalStorage( data: ContactI) {
    //if id is not null then update
    if(data.id != '' && data.id != 0 && data.id != null && data.id != undefined) {
      this.updateContactLocalStorage(data);
      return true;
    }


    //else create
    data.id = uid(6);//create Id
    data?.ContactCellPhones?.forEach( x => {
      x.cellphoneId = data.id; //id for addres FOREIGN KEY
    })
    let Contact = [];
    if(this.localStorageServ.getItem(this.keyContact) === null) {
      //new Contact, if there aren't data is new Contact
      Contact = [];
      Contact.push(data);
      this.localStorageServ.setItem(this.keyContact, Contact)
      return true;
    }

    //no new
    Contact = this.localStorageServ.getItem(this.keyContact);
    Contact.push(data);
    this.localStorageServ.setItem(this.keyContact, Contact);
    return true;
  }

  updateContactLocalStorage(ContactUpdatedata: ContactI) {
    let Contact = this.localStorageServ.getItem(this.keyContact) as ContactI[];
    for (let i = 0; i < Contact.length; i++) {

          if (ContactUpdatedata.id == Contact[i].id) {
            Contact.splice(i, 1);
            Contact.push(ContactUpdatedata);
            Contact[i].ContactCellPhones.forEach( x => {
              x.cellphoneId  = Contact[i].id;
            });
            this.localStorageServ.setItem(this.keyContact, Contact);
            break;
          }
        }
  }

  deleteContactLocalStorage(Contactdata: ContactI) {
    let Contact = this.localStorageServ.getItem(this.keyContact) as ContactI[];
    for (let i = 0; i < Contact.length; i++) {
      if (Contactdata.id == Contact[i].id) {
        Contact.splice(i, 1);
        this.localStorageServ.setItem(this.keyContact, Contact);
        break;
      }
    }
  }
//#endregion

}
