import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputStyle]'
})
export class InputStyleDirective {

  constructor(private el: ElementRef) {
    // el.nativeElement.style.hover = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.width = "100%";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.width = "90%";
  }

}
