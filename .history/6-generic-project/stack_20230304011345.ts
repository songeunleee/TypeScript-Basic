{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }
  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };
  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }
    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("Stack is full!");
      }
      const node: StackNode<T> = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): T {
      // null == undefined but null !== undefined
      if (this.head == null) {
        throw new Error("Stack us empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(10);

  stack.push(1);
  stack.push("Bob 2");
  stack.push("Steve 3");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
