{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  const BEANS_GRAMM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;
  function nakeCoffe(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not Enough coffee beans!");
    }
  }
}
