import { AbstractControl} from "@angular/forms";

export function ConfirmPasswordValidator(control:AbstractControl)
{
  const password=control.get('Password');
  const confirmPassword=control.get('ConfirmPassword');

 if(password?.pristine ||confirmPassword?.pristine)
 {
    return null
 }
 else
 {
    return password && confirmPassword && password.value!=confirmPassword.value 
    ? {'mismatch':true}
    :null;
 }
}