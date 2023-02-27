{
  //  Array
  const fruits: string[] = ["💡", "🔥"];
  const scroes: number[] = [1, 3, 4]; // 이렇게 쓰는것이 좋다
  const scroes2: Array<number> = [1, 3, 4];

  function printArray(fruits: readonly string[]) {} // readonly는 불변성을 보장해줌, ex) fruits.push() 사용불가

  //  Tuple 엘리는 추천하지 않음 -> interface, type alias, class 사용
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
