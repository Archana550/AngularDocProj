import { IfStmt } from "@angular/compiler";
import {FormGroup} from "@angular/forms"

export function PasswordChecker (
    controlName : string , 
    CompareControlName: string
    ){

        return (formGroup:FormGroup)=>{

            const password= formGroup.controls[controlName];
            const ConfPassword = formGroup.controls[CompareControlName];

            if(password.value!==ConfPassword.value ){
                ConfPassword.setErrors({mustMatch: true})
            }else{
                ConfPassword.setErrors(null);
            }
        };

        

}