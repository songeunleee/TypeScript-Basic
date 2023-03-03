{
  function checkNull(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const result = checkNull(123);
  console.log(result);
  checkNull(null);
}
