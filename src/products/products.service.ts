import { Product } from './interfaces/product.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  products: Product[] = [];
  // db logic
  create(product: Product) {
    this.products.push(product);
    return this.products;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: String): Product {
    return this.products.find(p => p.id === id);
  }

  delete(id: string): Product[] {
    const index = this.products.findIndex(p => p.id === id);
    this.products.splice(index, 1);
    return this.products;
  }
}
