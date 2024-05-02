import { ISubscriber } from './ISubscriber';
import { User } from './User';

export class JobFinder extends User implements ISubscriber {
  public notify(message: string): void {
    console.log(
      `\nNotification:\n\tjobFinder: ${this.toString()}\n\tmessage: ${message}\n`
    );
  }
}
