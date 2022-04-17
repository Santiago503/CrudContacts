import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import {  maskPhoneRD } from 'src/app/helper/mask';
import { InputGeneric } from './model/InputGeneric';

@Component({
  selector: 'app-control-input-generic',
  templateUrl: './control-input-generic.component.html',
  styleUrls: ['./control-input-generic.component.css']
})
export class ControlInputGenericComponent implements OnInit {

  notPermit = [
    'textarea',
    'select',
    'ngselect',
    'ngselectMulti',
    'radio',
    'matSlideToggle'
  ]
  maskPhoneRD = maskPhoneRD;
  @Input() inputGeneric : InputGeneric[] = [];

  @Input() formGroup: any;


  @Input() classMain: string = '';
  @Input() subTitleformArrayName: string= '';

  @Output() change = new EventEmitter<any>();

  //formArray
  @Input() inputGenericDataArray : InputGeneric[] = [];
  @Input() formArrayName: any;
  @Input() control: any;

  constructor() { }

  ngOnInit(): void {
  }

  getChange(input:InputGeneric , event: any) {
    let newEvent;
    if(input?.typeMethor?.includes('change')){

      if(input?.type?.includes('ngselect')) {
        newEvent = {
          value: event?.term,
          label: input?.label?.toLowerCase()
        }
      }else if (input?.type == 'file'){

        newEvent = {
          value: event?.target?.files,
          label: input?.label?.toLowerCase()
        }

      }else if (input?.type == 'select'){
        newEvent = {
          value: event?.value,
          label: input?.label?.toLowerCase()
        }
      }else{
        newEvent = {
          value: event?.target?.value,
          label: input?.label?.toLowerCase()
        }
      }
      this.change.emit(newEvent);
    }
  }

  get fields() {  return this.formGroup;  }

  get getFormArray() {
    return this.formGroup.get(this.formArrayName) as FormArray;
  }

  getKeydown(input:any, event:Event, index: number | null = null) {

    //input must be typeMethor  Key
    if(
      (input?.label?.toLowerCase().includes('telefono')
      || input?.label?.toLowerCase().includes('cellphone')
      || input?.label?.toLowerCase().includes('celular'))
      && input?.typeMethor?.includes('key')){

        if(index != null) {
          maskPhoneRD(event, input?.formControlName, this.getFormArray, index);
          return;
        }
          maskPhoneRD(event, input?.formControlName, this.fields);
    }
  }

}
