import { ValidatorFn,AbstractControl } from "@angular/forms";

export function ForbiddenNameValidator(control:AbstractControl)
{
  const forbidden =/admin/.test (control.value);
  return forbidden?{'forbiddenName':{value:control.value}}:null;
}
