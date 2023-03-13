{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; //class level (static 붙여서)
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    // static은 함수에도 사용할 수 있다. 이 예제는 constructor를 사용하지 않고 coffeeMaker를 활용한다.
    // static을 붙이면 class level이기 때문에 new 키워드로 오브젝트를 생성하지 않고 바로 CoffeeMaker.makeMachine(3); 으로 사용한다.
    // Math.abs()처럼 따로 new Math로 오브젝트를 생성하지 않고 사용하는 것도 acs()같은 것들이 static으로 선언되어서

    makeCoffe(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not Enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }
  // CoffeeMaker class에는 두개의 멤머변수(coffeeBeans, BEANS_GRAMM_PER_SHOT)이 있다.

  const maker = new CoffeeMaker(32);
  const maker2 = CoffeeMaker.makeMachine(3);
}
