// @ts-nocheck
import { FormGroup } from '@angular/forms';

export function confirmPassword(form: FormGroup): { [key: string]: boolean } | null {
  if (form.get('password').value != null && form.get('confirmPassword').value != null) {
    if (form.get('password').value !== form.get('confirmPassword').value) {
      return { 'passwordMatch': true }
    }
  }
  return null;
}