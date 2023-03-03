// either: a or b
interface Either {
  left: () => number;
  right: () => number;
}

class SimpleEither implements Either {
  constructor(private leftValue: number, private rightValue: number) {}
}
