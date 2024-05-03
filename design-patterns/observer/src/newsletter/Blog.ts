export class Blog {
  private name: string;
  private content: string;

  constructor(name: string, content: string) {
    this.name = name;
    this.content = content;
  }

  public getName(): string {
    return this.name;
  }

  public getContent(): string {
    return this.content;
  }
}
