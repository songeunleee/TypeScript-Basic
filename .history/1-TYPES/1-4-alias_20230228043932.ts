{
  /**
   * Type Aliases 타입을 직접정의
   */
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "eliie",
    age: 12,
  };

  /**
   * String Literal Types 타입을 특정값으로도 지정
   */
  type Name = 'name';
  let eliieName: Name;
  eliieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
