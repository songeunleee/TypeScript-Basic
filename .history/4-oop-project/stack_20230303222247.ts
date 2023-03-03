{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }
  class StackNode {
    readonly value: string;
    readonly next?: StackNode;
  }
  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    get size() {
      return this._size;
    }
    push(value: string) {
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): string {
      this._size--;
    }
  }
}
