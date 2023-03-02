{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // piblic -> 따로 작성하지 않으면 public
  // private
  // protected
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level (static 붙여서)
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

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
}
