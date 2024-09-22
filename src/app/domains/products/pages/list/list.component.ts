import { Component, signal } from '@angular/core';

import { ProductComponent } from '../../components/product/product.component'; 
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor() {
    const initProduct: Product[] = [
      {
        id: 1,
        title: 'Producto 1',
        price: 10,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createAt: new Date().toISOString(),
      },
      {
        id: 1,
        title: 'Producto 1',
        price: 10,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createAt: new Date().toISOString(),
      },
      {
        id: 1,
        title: 'Producto 1',
        price: 10,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createAt: new Date().toISOString(),
      },
      {
        id: 1,
        title: 'Producto 1',
        price: 10,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createAt: new Date().toISOString(),
      }
    ];

    this.products.set(initProduct);

  }

  fromChild(event: string) {
    console.log('desde el padre');
    console.log(event)
  }

}
