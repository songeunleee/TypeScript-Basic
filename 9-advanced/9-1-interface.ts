type PositionType = {
  x: number;
  y: number;
};
interface PositionInterface {
  x: number;
  y: number;
}

//  object★
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
};

//  class★
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { x: number };

//  😆 only interfaces can be merged.
/* interface PositionInterface {
     z: number; 
 }*/ // => x,y 후에 z를 추가한것 이제 PositionInterface는 x,y,z 가 있다.

//type PositionType {
//} => type은 interface처럼 나중에 추가하는것 안됨

// 😆 Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

type Name = Person["name"]; // string타입을 알아옴

type NumberType = number;
type Direction1 = "name" | "age"; // union같은건 interface가 못함

//interface 서로간의 약속을 할 경우에 사용, 특정한 규격을 정의할 경우
//types 데이터의 모습을 결정, 구현목적x, 데이터를 다루기 위함
