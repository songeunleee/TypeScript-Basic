Array;
[1, 2].map;

type Student = {
  passed: boolean;
};

const student: Student[] = [
  { passed: true },
  { passed: true },
  { passed: false },
];

const result = student.every((student) => student.passed);
console.log(result); // false

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
animals.every<Cat>(isCat);
