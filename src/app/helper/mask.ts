const excludedKeys = [8, 37, 39, 46, 9];
// mask cedula format
export function maskCedula(event: any, field: string = '', fields: any = null) {
  const keyCode = event.keyCode;
  if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) || excludedKeys.includes(keyCode) ) ||
    event.shiftKey ) {  event.preventDefault(); }

    //get the fields by paramet
    // Set 402-
    setQuidon(fields, field, 3, keyCode, excludedKeys);
    setQuidonFromIndex(fields, field, 11, keyCode, excludedKeys, 4);

}

// mask  format
export function maskPhoneRD(event: any, field: string, fields: any = null) {
  const keyCode = event.keyCode;

  if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) ||  excludedKeys.includes(keyCode)) || event.shiftKey)
  { event.preventDefault();  }

      // Set 809-
    setQuidon(fields, field, 3, keyCode, excludedKeys);
    // 809-000-
    setQuidonFromIndex(fields, field, 7, keyCode, excludedKeys, 4);
}

function setQuidon(fields: any, field: string, lengthSetQuidon:number, keyCode: number, excludedKeys: number[]) {
  fields = fields.get(field);
  if (fields?.value?.length === lengthSetQuidon && field != '') {
    if (!excludedKeys.includes(keyCode)) {
      fields?.setValue(fields?.value + "-");
    }
  }
}

function setQuidonFromIndex(fields: any, field: string, lengthSetQuidon:number, keyCode: number, excludedKeys: number[], FromIndex = 0) {
  fields = fields.get(field);

  if (fields?.value?.length === lengthSetQuidon && field != '') {
    if (!fields?.value.includes("-", FromIndex) && !excludedKeys.includes(keyCode)) {
        fields?.setValue(fields?.value + "-");
    }
  }
}
