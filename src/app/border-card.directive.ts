import { Directive, ElementRef, HostListener } from '@angular/core';

// Pour changer la couleur de la fiche artisan seléctionnée

@Directive({
  selector: '[artisanBorderCard]',
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setBorder('#f5f5f5');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#0074c7');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
