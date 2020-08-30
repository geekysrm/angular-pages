import { Directive, ElementRef, Input } from '@angular/core';

// Make use of this directive using the word "appCustomNgClass" as an attribute to a HTML element
@Directive({
  selector: '[appCustomNgClass]',
})
export class CustomNgClassDirective {
  constructor(private element: ElementRef) {}

  // element.nativeElement: actual HTML element we applied the directive to
  @Input() set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
