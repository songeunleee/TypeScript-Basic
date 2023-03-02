{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    BEANS_GRAMM_PER_SHOT: number = 7;
    coffeeBeans: number = 0;

    constructor() {}

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

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffe(2);
  console.log(coffee);
}
