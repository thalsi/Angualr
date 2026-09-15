import { Component, ContentChild, ElementRef, ViewChildren } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {

  @ContentChild('title') title!:ElementRef;

    ngAfterContentInit() {
    console.log(this.title.nativeElement);
  }
}
