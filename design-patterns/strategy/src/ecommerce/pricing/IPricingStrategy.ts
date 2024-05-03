export interface IPricingStrategy {
  calculate(amount: number): number;
}
