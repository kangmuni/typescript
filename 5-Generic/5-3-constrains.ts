interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('Full time!!!');
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('Part time!!!');
  }
  workPartTime() {}
}

// **Bad!!**
// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 위험하다.
// function payBad(employee: Employee): Employee {
//     employee.pay();
//     return employee;  // 직원을 다시 리턴한다.
// }

// 제네릭은 어떤 타입이든 들어올수있기 때문에 employee에 페이가 있는지 없는지 숫자인지 스트링인지 타입에 대한 정보가 없기 때문에
// 세부적인 조건을 달아 Employee를 구현한 확장한 아이들만 가능해! 라고 extends를 사용한다.
// 제네릭도 조건들을 걸어두면서 제한적인 범위 내에서 일반화된 제네릭을 사용 할 수 있다.
function pay<T extends Employee>(employee: T) {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const muni = new PartTimeEmployee();
ellie.workFullTime();
muni.workPartTime();

const ellieAfterPay = pay(ellie);
const muniAfterPay = pay(muni);
// 모든 고용인을 한번에 받아와서 페이를 지불 하는것은 수월했지만,
console.log(muniAfterPay);
// ellieAfterPay.workFullTime 지불 한 뒤 일하는것에 접근이 안됨! 그냥 Employee만 받아오기 때문에 풀타임인지 파트타임인지 세부정보를 잃어버렸음

const obj1 = {
  name: 'muni',
  age: 29,
};

const obj2 = {
  animal: '🦦',
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj1, 'name'));
console.log(getValue(obj1, 'age'));
console.log(getValue(obj2, 'animal'));
