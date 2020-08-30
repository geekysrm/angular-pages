// Custom structural directive
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { TemplateAst } from '@angular/compiler';

@Directive({
  selector: '[appCustomNgTimes]',
})
export class CustomNgTimesDirective {
  // ViewContainerRef is a reference to the HTML element the directive is applied to, and helps us to change the content inside the element
  // TemplateRef is a reference to the elements "inside" the HTML element we applied the directive to
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appCustomNgTimes') set renderNumberOfTimes(times: number) {
    // clear out any elements that are inside our viewContainer:
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      // create HTML inside of the viewContainer from scratch:
      // The HTML to be put inside the viewContainer is provided by the templateRef(templateRef is a reference to the elements "inside" the HTML element we applied the directive to)
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
