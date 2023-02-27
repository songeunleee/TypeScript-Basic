{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return "hello";
  } // 함수의 리턴타입을 설정하지 않았지만 string이 리턴된다는것을 알고있을때

  const result = jsStrFunc();
  // result.length // 이러면 타입스크립트는 result가 any이기 때문에 length같은 stirng api를 사용불가
  (result as string).length; // 하지만 나는 string인걸 알고있으므로 강제로지정함
  (<string>result).length; // 같은 코드

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 💩 이러면 에러발생

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(1); // ! number[]배열과 undefined중에 배열이라고 확신해서 붙인다.

  //너무 장담하면 안댐

  const button = document.querySelector("class");
  if (button) {
    button.nodeValue;
  }
}
