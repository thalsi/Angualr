import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  standalone:true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  selector: 'app-leran',
  styleUrl: './leran.css',
  templateUrl: './leran.html',
})
export class Leran {}
