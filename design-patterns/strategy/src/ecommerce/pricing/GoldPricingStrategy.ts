import { IPricingStrategy } from './IPricingStrategy';

export class GoldPricingStrategy implements IPricingStrategy {
  public calculate(amount: number): number {
    return amount * 0.9;
  }
}
