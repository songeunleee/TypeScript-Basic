{
  class Node {
    item?: number;
    next: Node | null = null;
    constructor(item: number) {
      this.item = item;
    }
  }

  class LinkedList {
    private head: Node = { next: null };
    private length: number = 0;

    append(node: Node) {
      let current = this.head;

      if (!current) {
        this.head = node;
        this.length += 1;
      }
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.length += 1;
    }
  }

  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }
  class stack implements Stack {}
}
