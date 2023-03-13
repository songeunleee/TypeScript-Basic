console.log(this); //window

function simpleFunc() {
  console.log(this);
}

simpleFunc(); //window 글로벌에서 함수를 호출하는것은 윈도우호출

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase(); // Counter
const caller = counter.increase;
caller(); // undefined

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run();
