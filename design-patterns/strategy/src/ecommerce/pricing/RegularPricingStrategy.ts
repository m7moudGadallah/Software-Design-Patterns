import { IPricingStrategy } from './IPricingStrategy';

export class RegularPricingStrategy implements IPricingStrategy {
  public calculate(amount: number): number {
    return amount;
  }
}
