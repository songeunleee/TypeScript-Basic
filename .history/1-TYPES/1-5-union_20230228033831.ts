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
  type Success = "success";
  type Fail = "fail";
  function login(id: number): Success | Fail {
    return "success";
  }
}
