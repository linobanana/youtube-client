import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {
  @Input('appBorderColor') public date: string;

  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) { }

  private setBorderColor(date: string): void {
    let color: string;
    let publishDate: Date = new Date(date);
    let dateNow: Date = new Date(Date.now());
    let dateDifference: number = Math.ceil(Math.abs(dateNow.getTime() - publishDate.getTime())
     / (1000 * 3600 * 24));
    if (dateDifference < 7) {
      color = 'blue';
    } else if (dateDifference >= 7 && dateDifference < 30) {
      color = 'green';
    } else if (dateDifference >= 30 && dateDifference < 180) {
      color = 'yellow';
    } else {
      color = 'red';
    }
    this._renderer2.setStyle(this._elementRef.nativeElement, 'border-bottom', `3px solid ${color}`);
  }

  public ngOnInit(): void {
    this.setBorderColor(this.date);
  }
}
