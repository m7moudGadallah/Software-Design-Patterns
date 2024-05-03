import { Customer } from './Customer';
import { CustomerMembership } from './CustomerMembership';
import { IPaymentStrategy } from './payments/IPaymentStrategy';
import { GoldPricingStrategy } from './pricing/GoldPricingStrategy';
import { PremiumPricingStrategy } from './pricing/PremiumPricingStrategy';
import { RegularPricingStrategy } from './pricing/RegularPricingStrategy';
import { Product } from './Product';

export class CheckoutService {
  private customer: Customer;
  private product: Product;
  private paymentStrategy: IPaymentStrategy;

  constructor(
    customer: Customer,
    product: Product,
    paymentStrategy: IPaymentStrategy
  ) {
    this.customer = customer;
    this.product = product;
    this.paymentStrategy = paymentStrategy;
  }

  private calculatePrice(amount: number): number {
    if (this.customer.getMembership() === CustomerMembership.GOLD)
      return new GoldPricingStrategy().calculate(amount);

    if (this.customer.getMembership() === CustomerMembership.PREMIUM)
      return new PremiumPricingStrategy().calculate(amount);

    return new RegularPricingStrategy().calculate(amount);
  }

  public checkout(): number {
    if (this.product.getQuantity() <= 0) {
      throw new Error('Sorry, Product out of stock!');
    }

    const price = this.calculatePrice(this.product.getPrice());
    this.paymentStrategy.pay(price);
    this.product.setQuantity(this.product.getQuantity() - 1);
    return price;
  }
}
