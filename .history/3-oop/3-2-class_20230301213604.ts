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

    makeCoffe(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not Enough coffee beans!");
      }
      this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;

      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }
  // CoffeeMaker class에는 두개의 멤머변수(coffeeBeans, BEANS_GRAMM_PER_SHOT)이 있다.

  const maker = new CoffeeMaker(32);
  console.log(maker);
}
