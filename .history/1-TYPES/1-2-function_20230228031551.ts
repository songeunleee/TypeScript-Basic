{
  //  JavaScript ๐ฉ
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  //  TypeScript โจ
  function Add(num1: number, num2: number): number {
    return num1 + num2;
  }

  //  JavaScript ๐ฉ
  function jsFetchNum(id) {
    //...code
    //...code
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //  TypeScript โจ
  function FetchNum(id: string): Promise<number> {
    //...code
    //...code
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //  JavaScript โจ => TypeScript

  //  Optional parameter [?] => :์์ ์์ฑ, ๊ฐ์ด ์์ด๋ ๋๊ณ  ์์ด๋ ๋จ, ์ ๋ฌ ์ํ์ธ์๋ undefined๋ก ์ถ๋ ฅ
  // string | undefined์ด๋์ ๋ค๋ฆ ์ด๊ฑฐ๋ undefined๊ฐ ์ธ์๋ก ๊ผญ ์์ด์ผํจ
  // null์ ์๋จ
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "jobs");
  printName("Ellie");
  printName("Anna", undefined);

  //  Default parameter
  //๊ธฐ๋ณธ๊ฐ์ ํ ๋นํ  ์ ์์
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage(); // default message ์ถ๋ ฅ

  //  Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
