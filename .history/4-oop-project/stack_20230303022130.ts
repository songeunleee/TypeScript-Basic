{
  class Node {
    item?: number;
    next: Node | null;
    constructor(item: number) {
      this.item = item;
    }
  }

  class LinkedList {
    private head: Node = { next: 0 };
  }

  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }
  class stack implements Stack {}
}
