export class Product {
  private name: string;
  private price: number;
  private quantity: number;

  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    if (quantity <= 0) throw new Error('Invalid quantity!');
    this.quantity = quantity;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public setQuantity(quantity: number): void {
    if (quantity < 0) throw new Error('Invalid quantity!');

    this.quantity = quantity;
  }

  public toString(): string {
    return `{name: ${this.name}, price: ${this.price}, quantity: ${this.quantity}}`;
  }
}
