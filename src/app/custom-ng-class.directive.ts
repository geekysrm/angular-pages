import { Directive } from '@angular/core';

// Make use of this directive using the word "appCustomNgClass" as an attribute to a HTML element
@Directive({
  selector: '[appCustomNgClass]',
})
export class CustomNgClassDirective {
  constructor() {
    console.log('appCustomNgClass custom directive used');
  }
}
