import { IPaymentStrategy } from './IPaymentStrategy';

export class BankTransferPaymentStrategy implements IPaymentStrategy {
  public pay(amount: number): void {
    console.log(`Successful BankTransfer payment, [amount: ${amount}]!`);
  }
}
