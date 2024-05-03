import { IPaymentStrategy } from './IPaymentStrategy';

export class VisaCardPaymentStrategy implements IPaymentStrategy {
  public pay(amount: number): void {
    console.log(`Successful VisaCard payment, [amount: ${amount}]!`);
  }
}
