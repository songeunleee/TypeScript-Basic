{
  const obj = {
    name: "ellie",
  };

  obj.name; //ellie
  obj["name"]; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "femail";
  };
}
