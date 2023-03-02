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

  // const maker = new CoffeeMaker(32); constructor를 private로 설정했기 때문에, constructor를 활용하는 메소드를 이용해야함
  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("");
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  const user = new User("Steve", "Jobs");
  console.log(user.fullName); // Steve Jobs
  //user.firstName = "Ellie";
  user.age = 1; // setter사용으로 private인 internalAge에 접근함.
  console.log(user.fullName); // Steve Jobs -> fullName은 constructor에서 만들어져서 line 58의 코드가 영향을 미치지 못함 -> getter 사용으로 해결
}
