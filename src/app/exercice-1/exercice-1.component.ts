import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ColorDirective } from './color.directive';
@Component({
  selector: 'app-exercice-1',
  templateUrl: './exercice-1.component.html'
})
export class Exercice1Component implements OnInit {

  public values = '';
  // Ce Hostlistener permet d'écouter un événement sur l'objet window global;
  // Peut-être que cela vous sera utile pour votre directive ;)
  // (Il vous faudra bien sûr le déplacer dans celle-ci)

  // @HostListener('window:click', ['$event']) windowClick($event) {
  //   console.log($event);
  // }

  constructor() {
  }

  ngOnInit() {
  }

  public onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
}
