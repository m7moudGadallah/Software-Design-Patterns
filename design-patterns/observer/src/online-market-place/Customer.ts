import { ISubscriber } from './ISubscriber';
import { User } from './User';

export class Customer extends User implements ISubscriber {
  notify(message: string): void {
    console.log(
      `\nNotification:\n\tcustomer: ${this.toString()}\n\tmessage: ${message}\n`
    );
  }
}
