import { randomUUID } from 'crypto';

export class User {
  protected readonly id: string;
  protected name: string;
  protected email: string;

  constructor(name: string, email: string) {
    this.id = randomUUID();
    this.name = name;
    this.email = email;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public toString(): string {
    return `{id: ${this.id}, name: ${this.name}, email: ${this.email}}`;
  }
}
