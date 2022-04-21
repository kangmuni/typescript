const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
// js의 모든 오브젝트는 Object라는 프로토를 상속한다.
console.log(x.__proto__ === y.__proto__);

const arr = [];
console.log(arr);
// arr도 마찬가지로 Array라는 프로토를 상속한다.
// Array라는 프로토는 Object라는 프로토도 상속한다.

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  // 만들어진 오브젝트마다 들어가있음
  // this.makeCoffee = (shots) => {
  //   console.log('making...');
  // };
}

// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making...');
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
