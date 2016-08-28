import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor, FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import { CustomValidators } from '../validators/custom-validators';
import { IValidationInfo } from  '../../models/validation-info';

@Component({
    selector: 'password',
    directives: [ REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor ],
    templateUrl: '../input-base/input-base.component.pug',
})
export class PasswordComponent extends InputBase implements OnInit {

    @Input() fgd: FormGroupDirective;
    @Input() placeholder: string;
    @Input() field: string;
    @Input() label: string;
    @Input() floatingLabel: boolean;
    @Input() leftIcon: string;
    @Input() rightIcon: string;
    @Input() disabled: boolean;
    @Input() value: string;

    // validators
    @Input() required: boolean;
    @Input() min: number;
    @Input() max: number;
    @Input() enforceComplexity: boolean;

    public validations: IValidationInfo[];

    constructor(el: ElementRef) {
        super(el);
    }

    public addValidators(): void {

        if (this.enforceComplexity) {
            this.validations.push({
                validator: CustomValidators.complexPassword,
                type: 'weakPassword',
                message: `This password is not complex enough.
                It requires at least one of each: upper case letter,
                lower case letter, digit and a special character.
                Also it should be at least eight charaacters long.`,
            });
        } else {
            if (this.min) {
                this.validations.push(InputBase.minValidator(this.min));
            }

            if (this.max) {
                this.validations.push(InputBase.maxValidator(this.max));
            }
        }
    }

    public ngOnInit(): void {
        this.onInit();

        if (!this.leftIcon) {
            this.leftIcon = 'key';
        }

        // change text control to password
        this._el.nativeElement.getElementsByClassName('form-control')[0].type = 'password';
    }

    public ngOnDestroy(): void {

    }

}
