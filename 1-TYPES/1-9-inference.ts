{
  /**
   * Type Inference
   */
  let text = "hello"; // 선언과 동시에 값을 저장하면 타입을 알아서 할당함
  //text = 1;  에러

  function print(message = "hello") {
    console.log(message);
  }

  print("hello");
  //print(1); 디폴트값을 string으로 지정해서 string타입이 할당됨

  function add(x: number, y: number) {
    return x + y;
  }
}
