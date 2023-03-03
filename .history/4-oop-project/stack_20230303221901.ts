{
  class Node {
    item: string | null;
    next: Node | null = null;
    constructor(item: string) {
      this.item = item;
    }
  }

  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }
  class StackImpl implements Stack {
    private _size: number = 0;
    get size() {
      return this._size;
    }
    push(value: string) {}
    pop(): string {}
  }

  const s = new stack();

  s.push("eliie");
  s.push("el");
  s.push("el");
  s.push("el");
  console.log(s.pop());
  console.log(s.pop());
  console.log(s.pop());
  console.log(s.pop());

  s.push("3");
  console.log(s.size);
  console.log(s.pop());
}
