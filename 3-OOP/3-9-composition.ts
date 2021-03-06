{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  // ๐ Favor COMPOSITION over inheritance!!!!!!!!!!!!!
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GAMN_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
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
      console.log('cleaning the machine...โจ');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GAMN_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GAMN_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...๐ฅ');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots...โ๏ธ`);
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

  // ๊ฐ๊ฐ์ ๊ธฐ๋ฅ๋ณ๋ก ๋ฐ๋ก ๋ง๋ค์ด์ composition!
  // ์ธ๊ตฌ๋ ค ์ฐ์  ๊ฑฐํ๊ธฐ
  class CheapMilksteamer {
    private steamMilk(): void {
      console.log('Steaming some milk');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // ์คํ ์ ์กฐ๊ธฐ
  class AutomaticSugarMixer {
    private getSugar() {
      console.log('Getting some sugar from candy ๐ญ');
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: true,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFrother: CheapMilksteamer
    ) {
      super(beans);
    }
    // private steamMilk(): void {
    //   console.log("Steaming some milk");
    // }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
      //   this.steamMilk();
      //   return {
      //     shots,
      //     hasMilk: true,
      //   };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }
    // getSugar(): void {
    //   console.log("Getting some sugar ๐ฌ");
    // }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
      //   this.getSugar();
      //   return {
      //     ...coffee,
      //     hasSugar: true,
      //   };
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: CheapMilksteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }
  // ์น๋ช์ ์ธ ๋จ์ :
  // ์ด ๋ชจ๋  ์์ด๋ค์ ํญ์ ์ธ๊ตฌ๋ ค๊ฑฐํ๊ธฐ์ ์คํ์ ์กฐ๊ธฐ๋ฅผ ์ด์ฉํด์ผํ๋ค.
  // ๋์ค์ ๋ค๋ฅธ ์คํ์ ์กฐ๊ธฐ์ ์ธ๊ตฌ๋ ค๊ฑฐํ๊ธฐ๊ฐ ์๋ก ๋ง๋ค์ด์ก์๋ ๋ชจ๋  ํด๋์ค๋ค์ด ์ ๋ถ ์๋ฐ์ดํธ ๋์ด์ผํ๋ค.
  // ๊ทธ๋ฆฌ๊ณ  ํญ์ ์๋ค๋๋ง ์ฌ์ฉํด์ ์ค์ค๋ก๋ฅผ ์ ์ฝ ์ํค๊ณ  ์๋ค.
  // ํด๋์ค์ ํด๋์ค๋ค๊ฐ์ ์๋ก ์ ์๊ณ  ์ง๋ด๋๊ฒ์ ์ข์ง ์๋ค๊ณ  ํ๋ค. ์ด๋ฅผ ๊ฐ์ ํ๋ ๋ฐฉ๋ฒ์ ๋ค๋ก ใฑ ใฑ ใ !
}
