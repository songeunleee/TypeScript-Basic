{
  /**
   *  Union Types: OR
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  //function : login -> success, fail
  type SuccessState = {
    response: {
      body: String;
    };
  };
  type FailState = {
    reson: string;
  };
  type LoginState = SuccessState | FailState;

  function loginIn(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😂 reason

  function printLoginStateIn(state: LoginState){
    if('response' in state){
        console.log(`🎉${state.response.body}`);
    }else
        console.log(`😂 ${state.reson}`);
        
  } 
  //위 함수는 [in]이라는 키워드를 사용한 예시, response가 안에 있다면 successstate라는 코드임
  //근데 별로 추천안함 -> desciminated
}
