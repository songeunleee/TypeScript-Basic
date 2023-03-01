/**
 * Let's make a game 🕹
 */
const position = { x: 0, y: 0 };

type Direction = "up" | "down" | "left" | "right";

function move(direction: ) {
  switch (derection) {
    case "up":
      position.y++;
      break;
    case "down":
      position.y--;
      break;
    case "left":
      position.x--;
      break;
    case "right":
      position.x++;
      break;
    default:
      throw Error(`unknown direction ${move}`);
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
