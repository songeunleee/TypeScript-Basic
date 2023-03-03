{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }
  class StackNode {
    readonly value: StaticRangeInit;
    readonly next?: StackNode;
  }
  class StackImpl implements Stack {
    private _size: number = 0;
    get size() {
      return this._size;
    }
    push(value: string) {
      this._size++;
    }
    pop(): string {
      this._size++;
    }
  }
}
