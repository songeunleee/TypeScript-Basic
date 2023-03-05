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
interface PositionInterface {
  z: number; // x,y 후에 z를 추가한것 이제 PositionInterface는 x,y,z 가 있다.
} // 나중에 z를 추가하고 싶다면 같은 인터페이스 제목으로 추가할 수 있다.

//type PositionType {
//} => type은 interface처럼 나중에 추가하는것 안됨

// 😆 Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
