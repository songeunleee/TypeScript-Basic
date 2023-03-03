{
  class Node {
    item: number;
    next: Node;
    constructor(item: number) {
      this.item = item;
    }
  }

  class LinkedList {
    private head: Node = null;
  }

  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }
  class stack implements Stack {}
}
