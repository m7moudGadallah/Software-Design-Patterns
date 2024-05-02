import { randomUUID } from 'crypto';

export class Product {
  private readonly id: string;
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.id = randomUUID();
    this.name = name;
    this.price = price;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }
}
