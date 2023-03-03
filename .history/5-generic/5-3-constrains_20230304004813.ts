interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log("full time!!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log("part time!!");
  }
  workPartTime() {}
}

function pay(employee: Employee): Employee {
  employee.pay();
  return employee;
}
