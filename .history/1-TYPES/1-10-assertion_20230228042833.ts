{
  /**
   * Type Assertions ๐ฉ
   */
  function jsStrFunc(): any {
    return "hello";
  } // ํจ์์ ๋ฆฌํดํ์์ ์ค์ ํ์ง ์์์ง๋ง string์ด ๋ฆฌํด๋๋ค๋๊ฒ์ ์๊ณ ์์๋

  const result = jsStrFunc();
  // result.length // ์ด๋ฌ๋ฉด ํ์์คํฌ๋ฆฝํธ๋ result๊ฐ any์ด๊ธฐ ๋๋ฌธ์ length๊ฐ์ stirng api๋ฅผ ์ฌ์ฉ๋ถ๊ฐ
  (result as string).length; // ํ์ง๋ง ๋๋ string์ธ๊ฑธ ์๊ณ ์์ผ๋ฏ๋ก ๊ฐ์ ๋ก์ง์ ํจ
  (<string>result).length; // ๊ฐ์ ์ฝ๋

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ๐ฉ ์ด๋ฌ๋ฉด ์๋ฌ๋ฐ์

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(1); // ! number[]๋ฐฐ์ด๊ณผ undefined์ค์ ๋ฐฐ์ด์ด๋ผ๊ณ  ํ์ ํด์ ๋ถ์ธ๋ค.

  //๋๋ฌด ์ฅ๋ดํ๋ฉด ์๋

  const button = document.querySelector("class");
  if (button) {
    button.nodeValue;
  }
}
