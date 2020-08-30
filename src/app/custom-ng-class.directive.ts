// Custom attribute directive

import { Directive, ElementRef, Input } from '@angular/core';

// Make use of this directive using the word "appCustomNgClass" as an attribute to a HTML element
@Directive({
  selector: '[appCustomNgClass]',
})
export class CustomNgClassDirective {
  constructor(private element: ElementRef) {}

  // element.nativeElement: actual HTML element we applied the directive to
  // @Input() set appCustomNgClass(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
  // Final:
  // @Input('appCustomNgClass') set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
  // For different functionality:
  @Input('appCustomNgClass') set classNames(classObj: any) {
    // For-in loops can be used to iterate over keys of an object
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
