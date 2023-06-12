import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appShowClass]',
})
export class ShowClassDirective implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}


@HostListener('click', ['$event'])
  onClick(eve: Event) {
    let ele = eve.target as HTMLElement
    // console.log(ele.closest('li')?.nextElementSibling?.children[1]);
    ele.closest('li')?.nextElementSibling?.children[1].classList.remove('show')

  }



}


