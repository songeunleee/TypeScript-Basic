{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // piblic -> 따로 작성하지 않으면 public
  // private -> 밖에서 접근 불가
  // protected -> 외부는 불가, 상속한 자식은 가능
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level (static 붙여서)
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
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
    } // private키워드로 외부에서 접근 불가능하게 만든 CoffeeBeans를 수정하고 싶을때는 클래스에 수정하는 메소드를 만들어 준다.

    grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not Enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    }

    preheat(): void {
      console.log("heating up...");
    }

    extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shot`);
      return {
        shots: shots,
        hasMilk: false,
      };
    }
    makeCoffe(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
      // if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
      //   throw new Error("Not Enough coffee beans!");
      // }
      // this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

      // return {
      //   shots: shots,
      //   hasMilk: false,
      // };
    }
  }
  // CoffeeMaker class에는 두개의 멤머변수(coffeeBeans, BEANS_GRAMM_PER_SHOT)이 있다.

  // const maker = new CoffeeMaker(32); constructor를 private로 설정했기 때문에, constructor를 활용하는 메소드를 이용해야함
  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);
}
