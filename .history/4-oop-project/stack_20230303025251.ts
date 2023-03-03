{
  class Node {
    item?: string;
    next: Node | null = null;
    constructor(item: string) {
      this.item = item;
    }
  }

  class LinkedList {
    head: Node = { item: undefined, next: null };
    length: number = 0;

    append(node: Node) {
      let current = this.head;

      if (current.item == undefined) {
        this.head = node;

        this.length += 1;
      }
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.length += 1;
    }
    delete() {
      this.head = this.head.next as Node;
      this.head.next = null;
    }
  }

  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }
  class stack implements Stack {
    size: number = 0;
    list = new LinkedList();
    push(value: string) {
      this.list.append(new Node(value));

      this.size = this.list.length;
    }
    pop(): string {
      this.size -= 1;
      return this.list.head.item as string;
    }
  }

  const s = new stack();

  s.push("eliie");
  s.push("el");

  console.log(s.pop());
  console.log(s.pop());
}
