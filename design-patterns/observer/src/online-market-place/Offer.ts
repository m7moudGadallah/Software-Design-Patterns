import { randomUUID } from 'crypto';
import { Product } from './Product';

export class Offer {
  private readonly id: string;
  private product: Product;
  private discount: number;

  constructor(product: Product, discount: number) {
    this.id = randomUUID();
    this.product = product;
    this.discount = discount;
  }

  public getId(): string {
    return this.id;
  }

  public getProduct(): Product {
    return this.product;
  }

  public getDiscount(): number {
    return this.discount;
  }

  public getMessage(): string {
    return `${this.product.getName()} is now available with a ${
      this.discount
    }% discount!`;
  }
}
