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
  // success -> ๐ body
  // fail -> ๐ reason

  function printLoginStateIn(state: LoginState){
    if('response' in state){
        console.log(`๐${state.response.body}`);
    }else
        console.log(`๐ ${state.reson}`);
        
  } 
  //์ ํจ์๋ [in]์ด๋ผ๋ ํค์๋๋ฅผ ์ฌ์ฉํ ์์, response๊ฐ ์์ ์๋ค๋ฉด successstate๋ผ๋ ์ฝ๋์
  //๊ทผ๋ฐ ๋ณ๋ก ์ถ์ฒ์ํจ -> desciminated
}
