// @ts-nocheck
import { FormControl } from '@angular/forms';

export function noWhiteSpaceValidator(control: FormControl): { [key: string]: boolean } | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
} 