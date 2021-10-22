# Validation's for angular reactive froms

## Validation for from in angular 

### Steps:
- Step 1. Create a function for custom validation of data in from. E.g like below
```ts
import { FormControl } from '@angular/forms';

export function NoWhiteSpaceAllowedValidator(control: FormControl): { [key: string]: boolean } | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
} 
```
- Step 2. Decalre variables in component where you want to use the validator
```ts
  // validation Message for reactive from validators and custom validators
  private validationMessages: { [key: string]: { [key: string]: string } };
  private groupValidationMessages: { [key: string]: string };
```
- Step 3.  Inside constructor create a object of validation messages  
```ts
// Here validationMessages is a private variable which we have declared 
this.validationMessages = {
      formControlName: {
        Validator1: 'Message 1',
        Validator2: 'Message 2',
        // we can add multiple validators here as per requirement
      }
};
```
- Step 4. Adding validators in form init method
```ts
 ngOnInit() {
    this.form = this.formBuilder.group(
    {  // Here in an array we can add multiple validators 
        formControlName: [null, [Validators.required, Validators.minLength(80)]]
    },
    // This is group validation for the form 
    { validators: NoWhiteSpaceAllowedValidator });
````
- Step 5. Adding function to show validation messages 
```ts 
public ValidationMessagesForController(control: string): string[] {
    const messages = [];
    Object.keys(this.validationMessages[control]).forEach(validator => {
      if ((this.form.get(control).touched || this.form.get(control).dirty) && this.form.get(control).errors) {
        if (this.form.get(control).errors[validator]) {
          messages.push(this.validationMessages[control][validator]);
        }
      }
    });
    return messages;
  }
  
  // Group validator function 
public GroupValidationMessages(form: FormGroup): string[] {
    const messages = [];
    Object.keys(this.groupValidationMessages).forEach(validator => {
      if (form.errors) {
        if (form.errors[validator]) {
          messages.push(this.groupValidationMessages[validator]);
        }
      }
    });
    return messages;
  }
```
- Step 6. Adding validator in html form 
```html
 <input type="text" placeholder="Enter you name" formControlName="name">
 <!-- Validator messages showing to users -->
 <p *ngFor="let message of displayValidationMessages('confirmPassword')">
    {{message}}
</p>
<!-- Group validator messages to users -->
<p *ngFor="let message of displayGroupValidationMessages(form)">                   {{message}}
</p>  
````
