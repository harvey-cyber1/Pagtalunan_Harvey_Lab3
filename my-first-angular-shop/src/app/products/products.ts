import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  products = [
    { name: 'Seiko Watch', price: 100000, available: true, image: 'assets/image/Seiko Watch.jpg' },
    { name: 'Casio Watch', price: 300000, available: false, image: 'assets/image/Casio Watch.jpg' },
    { name: 'Seiko Watch (Premium)', price: 500000, available: true, image: 'assets/image/Seiko Watch1.jpg' }
  ];

  addToCart(product: any) {
    alert(product.name + ' added to cart!');
  }
}