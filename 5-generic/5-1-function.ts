{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null) {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  } // 타입의 정보가 사라짐 💩

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const number = checkNotNull(123);
  const boal = checkNotNull(true);
}
