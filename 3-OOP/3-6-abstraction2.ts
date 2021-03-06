{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GAMN_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...β¨');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GAMN_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GAMN_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...π₯');
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

  // const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  // maker.fillCoffeeBeans(37);
  // maker.makeCoffee(2);

  // const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker2.fillCoffeeBeans(37);
  // maker2.makeCoffee(2);
  // maker.clean();
  // μΈν°νμ΄μ€λ‘ νμμ μ νν΄μ λ°κ² λλ©΄ μΈν°νμ΄μ€μμ μ ν΄μ§ μμ΄λ€λ§ μ κ·Όμ΄ κ°λ₯νλ€.

  class AmatuerUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(100);
      this.machine.clean();
    }
  }
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amatuer = new AmatuerUser(maker);
  const pro = new ProBarista(maker);
  amatuer.makeCoffee();
  pro.makeCoffee();
  // μλ‘ κ·μ λκ³  μ νλ μΈν°νμ΄μ€λ₯Ό μ¬μ©νκΈ° λλ¬Έμ μΈμ μλ λ²μκ° λ¬λΌμ§λ€!
  // μμ±μμμ μΈν°νμ΄μ€λ₯Ό λ°μμ€κΈ° λλ¬Έμ ν΄λμ€λ³΄λ€λ λ μ’μ λ²μμμ μ κ·Όμ΄ κ°λ₯νλ€!
  // POWER UP!!!!!!!!!!!!!!!!!!!!!
}
