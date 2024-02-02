import { FormControl, ValidationErrors } from "@angular/forms";

export class EcommerceValidators {
    static notOnlyWhiteSpace(control: FormControl) : ValidationErrors {

        if ((control.value != null) && ( control.value.trim().length === 0)) {
            // invalid, return error object
            return {'notOnlyWhiteSpace': true};
        }
        else {
            // valid, return null
            return null;
        }
    }
}
