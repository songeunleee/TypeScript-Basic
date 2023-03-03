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

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);
