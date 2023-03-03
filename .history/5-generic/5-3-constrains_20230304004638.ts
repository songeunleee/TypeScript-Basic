interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log("full time!!");
  }
  workFullTime() {}
}
