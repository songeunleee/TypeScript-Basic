console.log(this); //window

function simpleFunc() {
  console.log(this);
}

simpleFunc(); //window 글로벌에서 함수를 호출하는것은 윈도우호출

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase(); // Counter
const caller = counter.increase;
//const caller = counter.increase.bind(counter);
caller(); // 바인딩을 하지 않거나,arrow function을 사용하지 않으면 undefined

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run();
