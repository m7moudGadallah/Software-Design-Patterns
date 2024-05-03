import { IPricingStrategy } from './IPricingStrategy';

export class PremiumPricingStrategy implements IPricingStrategy {
  public calculate(amount: number): number {
    return amount * 0.8;
  }
}
