{
  //  JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  //  TypeScript ✨
  function Add(num1: number, num2: number): number {
    return num1 + num2;
  }

  //  JavaScript 💩
  function jsFetchNum(id) {
    //...code
    //...code
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //  TypeScript ✨
  function FetchNum(id: string): Promise<number> {
    //...code
    //...code
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //  JavaScript ✨ => TypeScript

  //  Optional parameter [?] => :앞에 작성, 값이 있어도 되고 없어도 됨, 전달 안한인자는 undefined로 출력
  // string | undefined이랑은 다름 이거는 undefined가 인자로 꼭 있어야함
  // null은 안됨
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "jobs");
  printName("Ellie");
  printName("Anna", undefined);

  //  Default parameter
  //기본값을 할당할 수 있음
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage(); // default message 출력

  //  Rest parameter [...] 갯수와 상관없이 인자를 받고 싶을 때, 타입을 배열로 해주어야행 
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
