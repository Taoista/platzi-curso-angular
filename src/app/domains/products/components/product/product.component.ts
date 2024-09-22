import { Component, input, Input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  product = input.required<Product>();

  addToCart = output<string>();

  addToCartHandler() {
    console.log('llamando el metotdo desde el hijo');
    this.addToCart.emit('hola estoy siendo llamado al carrito');

  }

}
