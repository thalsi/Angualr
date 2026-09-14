import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone:true,
  imports: [
    RouterLink
  ],
  selector: 'app-products-list',
  styleUrl: './products-list.css',
  templateUrl: './products-list.html',
})
export class ProductsList {}
