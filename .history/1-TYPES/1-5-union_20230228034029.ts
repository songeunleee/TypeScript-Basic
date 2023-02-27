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
    response: string;
  };
  function login(): SuccessState | FailState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }
}
