{
  class Node {
    head: true;
    item: number;
    next: Node | null;
    constructor(item: number) {
      this.item = item;
    }
  }

  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }
  class stack implements Stack {}
}
