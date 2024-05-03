import { CustomerMembership } from './CustomerMembership';

export class Customer {
  private name: string;
  private email: string;
  private membership: CustomerMembership;

  constructor(name: string, email: string, membership: CustomerMembership) {
    this.name = name;
    this.email = email;
    this.membership = membership;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getMembership(): CustomerMembership {
    return this.membership;
  }

  public toString(): string {
    return `{name: ${this.name}, email: ${this.email}, membership: ${CustomerMembership[this.membership]}}`;
  }
}
