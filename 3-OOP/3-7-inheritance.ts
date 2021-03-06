{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GAMN_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      // private λΊ
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...β¨");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GAMN_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GAMN_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...π₯");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots...βοΈ`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    // μμ => κ³΅ν΅μ μΈ κΈ°λ₯μ μ¬μ¬μ©νλ©΄μ μμν΄λμ€μμλ§ λ νΉνλ κΈ°λ₯μ μΆκ°ν  μ μλ€.

    // μμ ν΄λμ€μμ λ λ€λ₯Έ λ°μ΄ν°λ₯Ό μμ±μμμ λ°μ μ¬ μ μλ€λ©΄..!(μλ¦¬μΌ λλ²)
    // κΌ­ super ν€μλλ₯Ό μ΄μ©ν΄μ λΆλͺ¨μ μμ±μλ νΈμΆ ν΄μΌ νκ³  λΆλͺ¨ν΄λμ€μμ νμν λ°μ΄ν°λ λ°μμμΌνλ€.
    constructor(beans: number, public readonly serialNumber: string) {
      //  public readonly or private
      super(beans);
    }

    private steamMilk(): void {
      console.log("Steaming some milk");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // super ν€μλλ₯Ό μ΄μ©ν΄μ λΆλͺ¨ν΄λμ€μ μλκ²μ μ κ·Όνκ±°λ νΈμΆ κ°λ₯
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, "SSSS");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
