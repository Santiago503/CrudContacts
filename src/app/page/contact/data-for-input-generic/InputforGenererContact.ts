import { InputGeneric } from "src/app/components/control-input-generic/model/InputGeneric";

export const inputGenericDataContact: InputGeneric[] = [
  { label: "",
    class: "w-100 ",
    appearance: 'outline',
    type: "hidden",
    required: false,
    typeInput:"normal",
    formControlName:"id",
    data : null },

  { label: "Name",
    class: "col-md-6 col-sm-6",
    appearance: "outline",//Type style Mat or normal
    type: "text",//type input
    typeInput:"matInput",
    formControlName: "name",
    onlyUpperCase: false, //all word in UpperCase
    maxLength: 50,
    data : null,
    required: true },

  { label: "Last Name",//
    class: "col-md-6 col-sm-6",
    appearance: "outline",
    type: "text",
    typeInput:"matInput",
    formControlName: "lastname",
    onlyUpperCase: false,
    maxLength: 50,
    data : null,
    required: true },


    { label: "Gender",
    class: "col-md-6 col-sm-6",
    appearance: "outline",
    type: "select",
    typeInput:"matInput",
    formControlName: "gender",
    data : null,
    required: true },

  { label: "email",
    class: "col-md-6 col-sm-6",
    appearance: "outline",
    type: "text",
    typeInput:"matInput",
    formControlName: "email",
    data : null,
    required: true },

  { label: "Address",//
    class: "col-md-12 col-sm-12",
    appearance: "outline",
    type: "text",
    typeInput:"matInput",
    formControlName: "address",
    typeMethor: 'key',
    onlyUpperCase: false,
    maxLength: 16,
    data : null,
    required: true },

  { label: "Status",
    class: "w-100 ",
    appearance: 'outline',
    type: "radio",
    typeInput: "matInput",
    formControlName: "status",
    data : null,
    required: true },
];
