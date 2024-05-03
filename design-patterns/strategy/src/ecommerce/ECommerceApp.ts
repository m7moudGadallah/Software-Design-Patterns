import { CheckoutService } from './CheckoutService';
import { Customer } from './Customer';
import { CustomerMembership } from './CustomerMembership';
import { IPaymentStrategy } from './payments/IPaymentStrategy';
import { Product } from './Product';

export class ECommerceApp {
  private readonly customers: Map<string, Customer>;
  private readonly products: Map<string, Product>;

  constructor() {
    this.customers = new Map();
    this.products = new Map();
  }

  public addNewCustomer(
    name: string,
    email: string,
    memberShip: CustomerMembership
  ): Customer {
    if (this.customers.has(name)) {
      throw new Error('Customer is already exist!');
    }

    const customer = new Customer(name, email, memberShip);
    this.customers.set(name, customer);
    return customer;
  }

  public addNewProduct(name: string, price: number, quantity: number): Product {
    if (this.products.has(name)) {
      throw new Error('Product is already exist!');
    }

    const product = new Product(name, price, quantity);

    this.products.set(name, product);

    return product;
  }

  public purchaseProduct(
    product: Product,
    customer: Customer,
    paymentStrategy: IPaymentStrategy
  ) {
    const checkoutService = new CheckoutService(
      customer,
      product,
      paymentStrategy
    );

    const amount = checkoutService.checkout();

    console.log(
      `\nSuccessful Purchasing:\n\tcustomer:${customer.toString()}\n\tproduct:${product}\n\tamount:${amount}$\n`
    );
  }
}
