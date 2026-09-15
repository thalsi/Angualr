import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Card } from './card/card';

@Component({
  imports: [
    Card
  ],
  selector: 'app-fundamentals',
  styleUrl: './fundamentals.css',
  templateUrl: './fundamentals.html',
})
export class Fundamentals implements OnInit{
  
  @ViewChild('myInput') input!: ElementRef;

  focusInput() {
    this.input.nativeElement.focus();
  }

  ngOnInit(): void {
    console.log(this.input);
  }

  ngAfterViewInit() {
    console.log(this.input);
  }
}
