import {FormControl} from "@angular/forms";

export class NumberValidator {
    static checkNumber = (numberOfDigits: number) => {
        return (control: FormControl): { [key: string]: boolean } => {
            let cv = control.value;
            let re = new RegExp("^[0-9]*[.,]?[0-9]+$");
            if (cv !== '') {
                if (!re.test(cv)) {
                    return {'notNumber': true}
                } else {
                    let length = 0;
                    if ((cv % 1) != 0) {
                        let string = cv.toString();
                        if (string.includes(".")) {
                            length = string.split(".")[1].length;
                        }
                        else if (string.includes(",")) {
                            length = string.split(",")[1].length;
                        }
                        if (length != numberOfDigits) {
                            return {'incorectNumerOfDigits': true};
                        }
                    }
                }
            }
            return null;
        }
    };
}