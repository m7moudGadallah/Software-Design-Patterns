import { IPaymentStrategy } from './IPaymentStrategy';

export class PayPalPaymentStrategy implements IPaymentStrategy {
  public pay(amount: number): void {
    console.log(`Successful PayPal payment, [amount: ${amount}]!`);
  }
}