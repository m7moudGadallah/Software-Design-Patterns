import { randomUUID } from 'crypto';

export class Job {
  private readonly id: string;
  private readonly name: string;

  constructor(name: string) {
    this.id = randomUUID();
    this.name = name;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }
}
