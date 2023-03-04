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
