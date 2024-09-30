import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  initialColor: string = '#f5f5f5';
  defaultColor: string = '#009688';
  defaultHeight: number = 180;
  defaultCursor: string = 'pointer';

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor)
    this.setCursorPointer(this.defaultCursor)
  }

  // Permet de sélèctionner une couleur (pkmnBorderCard="red" dans le template HTML)
  @Input('pkmnBorderCard') borderColor: string // alias

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor)
  }

  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`
  }

  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`
  }

  setCursorPointer(cursor: string){
    this.el.nativeElement.style.cursor = cursor
  }

}
