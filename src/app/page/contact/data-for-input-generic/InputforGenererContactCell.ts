import { InputGeneric } from "src/app/components/control-input-generic/model/InputGeneric";

export const inputGenericDataContactCell: InputGeneric[] = [
  { label: "",
    class: "w-100 ",
    appearance: 'outline',
    type: "hidden",
    required: false,
    typeInput:"normal",
    formControlName:"cellphoneId",
    data : null },

  { label: "Cellphone",
    class: "col-md-4 col-sm-4",
    appearance: "outline",//Type style Mat or normal
    type: "text",//type input
    typeInput:"matInput",
    formControlName: "cellphone",
    typeMethor:'key',
    onlyUpperCase: false, //all word in UpperCase
    maxLength: 12,
    data : null,
    required: true },

];
