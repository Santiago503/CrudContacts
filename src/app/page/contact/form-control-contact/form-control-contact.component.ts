import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputGeneric } from 'src/app/components/control-input-generic/model/InputGeneric';
import { AlertService } from 'src/app/service/alert/alert.service';
import { DialogService } from 'src/app/service/dialog/dialog.service';
import { inputGenericDataContact } from '../data-for-input-generic/InputforGenererContact';
import { inputGenericDataContactCell } from '../data-for-input-generic/InputforGenererContactCell';
import { ContactCellPhonesI, ContactI } from '../model/contactInterface';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-form-control-contact',
  templateUrl: './form-control-contact.component.html',
  styleUrls: ['./form-control-contact.component.css']
})
export class FormControlContactComponent implements OnInit {
  ContactTitle = "Create Contact"
  inputGenericData: InputGeneric[] = inputGenericDataContact;
  inputGenericDataContactCell: InputGeneric[] = inputGenericDataContactCell;

  constructor(@Inject(MAT_DIALOG_DATA) public matDialogData: any,
              private dialogServ: DialogService,
              private alert: AlertService,
              public contactServ: ContactService,
              private readonly changeDetectorRef: ChangeDetectorRef) {

                this.contactServ.createFormBuilder();

                matDialogData?.data ? this.patchValue( matDialogData?.data ) : null;
                matDialogData?.formEnableOrdisable ? this.contactServ.FormBuilder.enable() : this.contactServ.FormBuilder.disable();

              }

  ngOnInit() {
    this.setDataInputs()
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  setDataInputs() {
    this.inputGenericData[4].data = [{name: 'Male', id: 'M' }, {name: 'Female', id: 'F' }];
    this.inputGenericData[6].data = [{name: 'Active', id: 'A' }, {name: 'Inactive', id: 'I' }];
  }

  patchValue(data :ContactI) {
    this.contactServ.FormBuilder.reset();
    this.contactServ.FormBuilder.patchValue( data );
    if(data?.ContactCellPhones?.length > 0)
      this.patchValueForCell(data.ContactCellPhones);
  }

  patchValueForCell(data :ContactCellPhonesI[]) {
    this.contactServ.getCell.clear();

    data?.forEach((element: ContactCellPhonesI) => {
      this.addItem(element);
    });
  }


  addItem(Cell:any) {
    this.contactServ.getCell.push(this.contactServ.createFormArray());
  }

  deleteItem() {
    if(this.contactServ.getCell.length > 1){
      this.contactServ.getCell.removeAt(this.contactServ.getCell.length -1);
    }
  }

  validateForm(): boolean {
    this.contactServ.FormBuilder.markAllAsTouched();
    if(this.contactServ.FormBuilder.invalid) {
      this.alert.swalBasic('Algo Ocurrio Mal!', 'Error Formulario Invalido, todos los campos en rojos son requeridos','error');
      return false;
    }
    return true;
  }

  save() {
      var valid = this.validateForm();
      if(!valid) { return; }

      let data = this.contactServ.FormBuilder.value;
      this.saveLocalStorage(data)
  }

  saveLocalStorage(data: ContactI) {
    let resp = this.contactServ.saveContactLocalStorage(data);

    if(resp) {
      this.alert.swalBasic('Good Job!','Saved Successfully','success');
      this.contactServ.ListContact = this.contactServ.Contacts;
      this.dialogServ.dialogClose();
    }
  }

}
