import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:keyup', ['$event']) keyPress(event: KeyboardEvent) {
    if (event.code === 'ArrowUp') {
      this.changeColor('pink');
    }
    if (event.code === 'ArrowDown') {
      this.changeColor('green');
    }
    if (event.code === 'ArrowLeft') {
      this.changeColor('blue');
    }
    if (event.code === 'ArrowRight') {
      this.changeColor('yellow');
    }
  }

  changeColor(chosen: string): void {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', chosen);
  }
}
