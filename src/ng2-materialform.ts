import { NgTranscludeDirective } from './common';

export { NgTranscludeDirective } from './common';

export const MATERIAL_COMMON = [
    NgTranscludeDirective,
];


// models
export { IMenuItem } from './models/menu-item';
export { ISelectionItem } from './models/selection-item';

// layout
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

export { AppHeaderComponent } from './layout/app-header/app-header.component';
export { SidebarComponent } from './layout/sidebar/sidebar.component';

export const MATERIAL_LAYOUT = [
    AppHeaderComponent,
    SidebarComponent,
];

// navigation
import { SideMenuComponent } from './navigation/side-menu/side-menu.component';
import { TabsetComponent } from './navigation/tabset/tabset.component';
import { TabDirective } from './navigation/tab/tab.directive';
import { TabHeadingDirective } from './navigation/tab-heading/tab-heading.directive';

export { SideMenuComponent } from './navigation/side-menu/side-menu.component';
export { TabsetComponent } from './navigation/tabset/tabset.component';
export { TabDirective } from './navigation/tab/tab.directive';
export { TabHeadingDirective } from './navigation/tab-heading/tab-heading.directive';

export const MATERIAL_NAVIGATION = [
    SideMenuComponent,
    TabsetComponent,
    TabDirective,
    TabHeadingDirective,
];


// forms
import { CheckboxComponent } from './forms/checkbox/checkbox.component';
import { EmailComponent } from './forms/email/email.component';
import { NumberComponent } from './forms/number/number.component';
import { PasswordComponent } from './forms/password/password.component';
import { PhoneComponent } from './forms/phone/phone.component';
import { RadioComponent } from './forms/radio/radio.component';
import { SelectPickerComponent } from './forms/select-picker/select-picker.component';
import { TextBoxComponent } from './forms/text-box/text-box.component';
import { TextAreaComponent } from './forms/text-area/text-area.component';
import { DateTimePickerComponent } from './forms/date-time-picker/date-time-picker.component';

import { MaskedInputDirective } from './forms/mask/masked-input.directive';

export { CheckboxComponent } from './forms/checkbox/checkbox.component';
export { EmailComponent } from './forms/email/email.component';
export { NumberComponent } from './forms/number/number.component';
export { PasswordComponent } from './forms/password/password.component';
export { PhoneComponent } from './forms/phone/phone.component';
export { RadioComponent } from './forms/radio/radio.component';
export { SelectPickerComponent } from './forms/select-picker/select-picker.component';
export { TextBoxComponent } from './forms/text-box/text-box.component';
export { TextAreaComponent } from './forms/text-area/text-area.component';
export { DateTimePickerComponent } from './forms/date-time-picker/date-time-picker.component';

export { MaskedInputDirective } from './forms/mask/masked-input.directive';

export const MATERIAL_FORM = [
    CheckboxComponent,
    EmailComponent,
    NumberComponent,
    PasswordComponent,
    PhoneComponent,
    RadioComponent,
    SelectPickerComponent,
    TextBoxComponent,
    TextAreaComponent,
    DateTimePickerComponent,

    MaskedInputDirective,
];


export const MATERIAL_ALL = [
    MATERIAL_COMMON,
    MATERIAL_LAYOUT,
    MATERIAL_NAVIGATION,
    MATERIAL_FORM,
];
