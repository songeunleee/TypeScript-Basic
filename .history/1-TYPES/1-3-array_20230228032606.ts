{
  //  Array
  const fruits: string[] = ["๐ก", "๐ฅ"];
  const scroes: number[] = [1, 3, 4]; // ์ด๋ ๊ฒ ์ฐ๋๊ฒ์ด ์ข๋ค
  const scroes2: Array<number> = [1, 3, 4];

  function printArray(fruits: readonly string[]) {} // readonly๋ ๋ถ๋ณ์ฑ์ ๋ณด์ฅํด์ค, ex) fruits.push() ์ฌ์ฉ๋ถ๊ฐ

  //  Tuple ์๋ฆฌ๋ ์ถ์ฒํ์ง ์์ -> interface, type alias, class ์ฌ์ฉ
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
