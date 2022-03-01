import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NumberValidator} from "./validators/number.validator";

export interface Messages {
    type: string
    text: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'wisercat-test';
    form: FormGroup;
    NumberOfDigitsAfter = 1;
    isSubmitted = false;

    messages: Messages[] = [];

    ngOnInit() {

        this.form = new FormGroup({
            name: new FormControl(null, {validators: Validators.required, updateOn: 'blur'}),
            surname: new FormControl(null, {validators: Validators.required, updateOn: 'blur'}),
            email: new FormControl(null, {validators: [Validators.required, Validators.email], updateOn: 'blur'}),
            workingExperience: new FormControl(null, {validators: [Validators.required, NumberValidator.checkNumber(this.NumberOfDigitsAfter)], updateOn: 'blur'})
        })
    }

    submitForm() {

        this.isSubmitted = true;

        if (this.form.status == 'INVALID') {
            this.messages = [
                {
                    type: 'error',
                    text: 'Form is not valid!'
                }
            ];
        }
        else if (this.form.status == 'VALID') {
            this.messages = [
                {
                    type: 'success',
                    text: 'Form is valid!'
                }
            ];
        } else {
            this.messages = [
                {
                    type: 'info',
                    text: 'Form is not valid!'
                }
            ];
        }
    }

    resetForm() {
        this.isSubmitted = false;
        this.messages = [
            {
                type: 'info',
                text: 'Form was cleared!'
            }
        ];
        this.form.reset();
    }
}
