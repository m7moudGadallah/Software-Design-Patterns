import { ISubscriber } from './ISubscriber';

export class User implements ISubscriber {
  private name: string;
  private email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public toString(): string {
    return `{name: ${this.name}, email: ${this.email}}`;
  }

  public notify(message: string): void {
    console.log(
      `\nNew Notification:\n\tuser: ${this.toString()}\n\tmessage: ${message}`
    );
  }
}
